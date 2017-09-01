/**
 * Gulp task runner
 */

// Dependencies
const child = require('child_process');
const path = require('path');
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const util = require('gulp-util');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

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
        includePaths: [path.join(__dirname, 'node_modules')]
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
gulp.task('watch', () => {
  // Since the guide requires that the styles get built, this
  // will actually run the styles twice
  gulp.watch(['source/styles/**/*.scss'], ['styles']);
  gulp.watch(['build/**/*', 'source/guide/**/*'], ['guide']);
});

// Local server
gulp.task('server', ['build:guide'], () => {
  return browserSync.init({
    port: 3000,
    server: './guide/',
    files: './guide/**/*'
  });
});

// Task combinations
gulp.task('build:guide', ['guide']);
gulp.task('build:styles', ['styles']);
gulp.task('develop', ['server', 'watch']);
gulp.task('default', ['build:styles', 'build:guide']);

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
