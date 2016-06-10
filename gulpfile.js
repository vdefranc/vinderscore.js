var gulp = require('gulp'),
    colors  = require('colors');
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat-util'),
    uglify = require('gulp-uglify'),
    jasmineBrowser = require('gulp-jasmine-phantom'),
    watch = require("gulp-watch"),
    babel = require('gulp-babel');

var phantomOptions = {
  integration: true, 
  includeStackTrace: true
};

gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(jshint({ "esversion": 6 }))
    .pipe(jshint.reporter('default'));
});

gulp.task('concat.scripts', function () {
  return gulp.src(['app/**/*.js', '!app/**/*.spec.js'])
      .pipe(concat('all.js'))
      .pipe(concat.header('var vs = {};\n\n'))
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('compiled'));
  });

gulp.task('concat.tests', function () {
  return gulp.src(['app/**/*.spec.js'])
      .pipe(concat('all.spec.js'))
      .pipe(gulp.dest('compiled'));
  });

gulp.task('test', function () {
  return gulp.src(['compiled/all.js','compiled/all.spec.js'])
    .pipe(jasmineBrowser(phantomOptions));
});

gulp.task('watch', function () {
  watch('app/**/*.js', function () {
      gulp.run('default');
  });
});

gulp.task('travis', function () {
    return gulp.src(['app/**/*.js','app/**/*.spec.js'])
      .pipe(jasmineBrowser(phantomOptions));
  });

// Default Task
gulp.task('default', ['jshint', 'concat.scripts', 'concat.tests', 'test']);
