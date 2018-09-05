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
gulp.task('styles:lint', () => {
  return gulp.src(['source/styles/**/*.scss']).pipe(
    stylelint({
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }]
    })
  );
});

// Compile styles
gulp.task('styles', ['styles:lint'], () => {
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
});

// Assets images
gulp.task('assets:images', () => {
  return gulp.src(['source/images/**/*']).pipe(gulp.dest('build/images/'));
});

// Lint JS
gulp.task('js:lint', () => {
  return gulp
    .src(['source/js/**/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

// Use Rollup to compile JS.  TODO: Try to move to a config file
gulp.task('js', ['js:lint'], async () => {
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
});

// Test JS via Jest (and JSDOM)
gulp.task(
  'js:test',
  gulpJest('js:test', {
    rootDir: __dirname,
    cache: false,
    testMatch: ['**/*.test.js'],
    transform: {
      '^.+\\.js$': 'babel-jest'
    }
    //setupFiles: ['./tests/globals.js']
  })
);

// Create guide with Jekyll
gulp.task('guide', ['guide:get-build'], done => {
  gulpRunner(
    'bundle',
    ['exec', 'jekyll', 'build', '-d', 'guide', '-s', 'source/guide'],
    done
  );
});

// Copy build files over to guide.  This is probably stupid
// since it is just duplicating things.  Maybe copy this over
// to the Jekyll output.
gulp.task('guide:get-build', ['assets:images', 'styles', 'js'], () => {
  return gulp.src(['build/**/*']).pipe(gulp.dest('source/guide/build'));
});

// Watch for building
gulp.task('watch:guide', () => {
  gulp.watch(
    [
      'source/styles/**/*.scss',
      'source/js/**/*.js',
      'source/guide/**/*',
      // Ensure we don't watch the build since it gets copied over
      '!source/guide/build/**/*'
    ],
    ['guide']
  );
  gulp.watch(['source/js/**/*.js'], ['js:test']);
});

// Local server
gulp.task('server', ['build:guide'], () => {
  return browserSync.init({
    port: 3000,
    server: './guide/',
    files: './guide/**/*'
  });
});

// Publish to gh-pages
gulp.task('publish', ['build'], () => {
  return gulp.src('guide/**/*').pipe(
    ghPages({
      message: 'Automatically updated with gulp-gh-pages [timestamp]'
    })
  );
});

// Cleanup
gulp.task('build:clean', () => {
  return del(['build/**/*']);
});
gulp.task('guide:clean', () => {
  return del(['guide/**/*', 'source/guide/build/**/*']);
});

// Task combinations
gulp.task('build:guide', ['guide']);
gulp.task('build:styles', ['styles']);
gulp.task('build:js', ['js', 'js:test']);
gulp.task('build:assets', ['assets:images']);

gulp.task('build', ['build:guide']);
gulp.task('develop', ['server', 'watch:guide']);
gulp.task('clean', ['build:clean', 'guide:clean']);
gulp.task('default', ['build']);

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
