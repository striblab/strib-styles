/**
 * Gulp task runner
 */

// Dependencies
const fs = require('fs');
const _ = require('lodash');
const querystring = require('querystring');
const child = require('child_process');
const path = require('path');
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const util = require('gulp-util');
const ghPages = require('gulp-gh-pages');
const geach = require('gulp-each');
const eslint = require('gulp-eslint');
const jest = require('jest-cli');
const sassExtract = require('sass-extract');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const mime = require('mime-types');
const del = require('del');
const rollup = require('rollup');
const rollupResolve = require('rollup-plugin-node-resolve');
const rollupBabel = require('rollup-plugin-babel');
const rollupUglify = require('rollup-plugin-uglify');
const rollupJSON = require('rollup-plugin-json');

// Make sure we are using a good node-sass
sass.compiler = require('node-sass');

// Lint styles/css
const stylesLint = () => {
  return gulp.src(['source/styles/**/*.scss']).pipe(
    stylelint({
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }]
    })
  );
};

// Compile styles
const styles = () => {
  return gulp
    .src(['source/styles/**/*.scss', '!source/styles/**/_*.scss'])
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: [path.join(__dirname, 'node_modules')],
        functions: sassFunctions({
          base: path.join(__dirname, 'source', 'styles')
        }),
        sourceComments: true
      }).on('error', sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          // browsers: See browserlist file
          cascade: false
        })
      ])
    )
    .pipe(
      rename(path => {
        path.basename = 'strib-styles.' + path.basename;
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
};

// Assets images
const assetsImages = () => {
  return gulp.src(['source/images/**/*']).pipe(gulp.dest('build/images/'));
};

// Get variables from sass
const jsStyleVars = done => {
  try {
    let rendered = sassExtract.renderSync(
      {
        file: 'source/styles/_variables.scss'
      },
      { plugins: ['compact'] }
    );

    // Remove $
    let vars = _.mapKeys(rendered.vars.global, (v, k) => k.replace(/^\$/, ''));

    // Write out
    fs.writeFileSync(
      path.join('build', 'strib-styles.styles.json'),
      JSON.stringify(vars)
    );

    done();
  }
  catch (e) {
    done(e);
  }
};

// Lint JS
const jsLint = () => {
  return gulp
    .src(['source/js/**/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format());
};

// Use Rollup to compile JS.  TODO: Try to move to a config file
const js = () => {
  return gulp.src(['source/js/**/*.js']).pipe(
    geach(async (content, file, done) => {
      let name = file.relative.replace('.js', '');
      name = _.camelCase(
        name === 'all' ? 'strib-styles' : 'strib-styles-' + name
      );

      const bundle = await rollup.rollup({
        input: './source/js/' + file.relative,
        plugins: [
          rollupJSON(),
          rollupResolve(),
          rollupBabel({
            exclude: 'node_modules/**'
          }),
          rollupUglify.uglify()
        ]
      });

      await bundle.write({
        file: './build/strib-styles.' + file.relative,
        format: 'umd',
        name: name,
        sourcemap: true
      });

      done(null);
    })
  );
};

// Test JS via Jest (and JSDOM)
const jsTest = gulpJest('js:test', {
  rootDir: __dirname,
  cache: false,
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
  //setupFiles: ['./tests/globals.js']
});

// Copy build files over to guide.  This is probably stupid
// since it is just duplicating things.  Maybe copy this over
// to the Jekyll output.
const guideGetBuild = () => {
  return gulp.src(['build/**/*']).pipe(gulp.dest('source/guide/build'));
};

// Create guide with Jekyll
const guide = done => {
  gulpRunner(
    'bundle',
    ['exec', 'jekyll', 'build', '-d', 'guide', '-s', 'source/guide'],
    done
  );
};

// Watch for building
const watch = () => {
  gulp.watch(
    [
      'source/styles/**/*.scss',
      'source/js/**/*.js',
      'source/guide/**/*',
      // Ensure we don't watch the build since it gets copied over
      '!source/guide/build/**/*'
    ],
    gulp.series('guide')
  );
  gulp.watch(['source/js/**/*.js'], gulp.series('js'));
};

// Local server
const server = () => {
  return browserSync.init({
    port: 3000,
    server: './guide/',
    files: './guide/**/*'
  });
};

// Publish to gh-pages
const publishPages = () => {
  return gulp.src('guide/**/*').pipe(
    ghPages({
      message: 'Automatically updated with gulp-gh-pages [timestamp]'
    })
  );
};

// Cleanup
const cleanBuild = () => {
  return del(['build/**/*']);
};
const cleanGuide = () => {
  return del(['guide/**/*', 'source/guide/build/**/*']);
};

// Tasks
gulp.task('styles:lint', stylesLint);
gulp.task('styles', gulp.series('styles:lint', styles));

gulp.task('assets:images', assetsImages);
gulp.task('assets', gulp.parallel('assets:images'));

gulp.task('js:style-vars', jsStyleVars);
gulp.task('js:lint', jsLint);
gulp.task('js:test', jsTest);
gulp.task(
  'js',
  // Babel and Jest tests are not working
  //gulp.series(gulp.parallel('js:style-vars', 'js:lint'), js, 'js:test')
  gulp.series(gulp.parallel('js:style-vars', 'js:lint'), js)
);

gulp.task(
  'guide:get-build',
  gulp.series(gulp.parallel('assets', 'styles', 'js'), guideGetBuild)
);
gulp.task('guide', gulp.series('guide:get-build', guide));

gulp.task('watch', watch);
gulp.task('server', server);

gulp.task('clean:build', cleanBuild);
gulp.task('clean:guide', cleanGuide);
gulp.task('clean', gulp.parallel('clean:build', 'clean:guide'));

gulp.task('publish:gh-pages', publishPages);

gulp.task('build', gulp.parallel('guide'));
gulp.task('develop', gulp.series('guide', gulp.parallel('server', 'watch')));
gulp.task('publish', gulp.series('clean', 'build', 'publish:gh-pages'));
gulp.task('default', gulp.parallel('build'));

// Run command line task
function gulpRunner(command, args, done) {
  const commandLog = command.split('/').pop();
  const proc = child.spawn(command, args);
  const logger = buffer => {
    buffer
      .toString()
      .split(/\n/)
      .forEach(message => util.log(commandLog + ': ' + message));
  };

  proc.stdout.on('data', logger);
  proc.stderr.on('data', logger);
  if (done) {
    proc.on('close', done);
  }
}

// Run jest tests
function gulpJest(name, options) {
  return done => {
    let oldEnv = process.env.BABEL_ENV;
    process.env.BABEL_ENV = 'test';

    jest
      .runCLI(options, [options.rootDir || process.cwd()], results => {
        if (results.numFailedTests) {
          return done(
            new util.PluginError(
              name,
              results.numFailedTests + ' tests failed.'
            )
          );
        }

        process.env.BABEL_ENV = oldEnv;
        done(null);
      })
      .catch(() => {
        process.env.BABEL_ENV = oldEnv;
        return done(new util.PluginError(name, 'Test did not pass.'));
      });
  };
}

// Custom SASS functions
function sassFunctions(options) {
  options = options || {};
  options.base = options.base || process.cwd();
  const types = sass.compiler.types;
  let funcs = {};

  // See https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass
  funcs['inline-image($file)'] = (file, done) => {
    file = path.resolve(options.base, file.getValue());
    let m = mime.lookup(file);
    let data;
    if (!m) {
      done('url(' + file.getValue() + ')');
    }

    // SVG doesn't need to be encoded
    if (~m.indexOf('svg')) {
      data = fs.readFileSync(file, 'utf-8');
      //data = data.replace(/(\s|\n|\r)+/, ' ');
      data = querystring.escape(data);
      data = 'url("data:' + m + ';utf8,' + data + '")';
      data = types.String(data);
    }
    else {
      data = fs.readFileSync(file);
      data = new Buffer(data);
      data = data.toString('base64');
      data = 'url(data:' + m + ';base64,' + data + ')';
      data = types.String(data);
    }

    done(data);
  };

  return funcs;
}
