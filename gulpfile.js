/**
 * Gulp task runner
 */

// Dependencies
const fs = require('fs');
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
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const mime = require('mime-types');

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
        })
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

// Create guide with Jekyll
gulp.task('guide', ['guide:get-build-styles'], done => {
  gulpRunner(
    'bundle',
    ['exec', 'jekyll', 'build', '-d', 'guide', '-s', 'source/guide'],
    done
  );
});

// Copy build files over to guide
gulp.task('guide:get-build-styles', ['styles'], () => {
  return gulp.src(['build/**/*']).pipe(gulp.dest('source/guide/styles'));
});

// Watch for building
gulp.task('watch:guide', () => {
  gulp.watch(
    [
      'source/styles/**/*.scss',
      'source/guide/**/*',
      '!source/guide/styles/**/*'
    ],
    ['guide']
  );
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

// Task combinations
gulp.task('build:guide', ['guide']);
gulp.task('build:styles', ['styles']);
gulp.task('build', ['build:styles', 'build:guide']);
gulp.task('develop', ['server', 'watch:guide']);
gulp.task('default', ['build']);

// Run command line task
function gulpRunner(command, args, done) {
  const proc = child.spawn(command, args);
  const logger = buffer => {
    buffer
      .toString()
      .split(/\n/)
      .forEach(message => util.log(command + ': ' + message));
  };

  proc.stdout.on('data', logger);
  proc.stderr.on('data', logger);
  if (done) {
    proc.on('close', done);
  }
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
