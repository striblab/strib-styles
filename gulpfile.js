/**
 * Gulp task runner
 */

// Dependencies
const path = require('path');
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');

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
