var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat-util'),
    jasmine = require('gulp-jasmine'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    reporters = require('jasmine-reporters'),
    jasmineBrowser = require('gulp-jasmine-phantom'),
    watch = require("gulp-watch");

var phantomOptions = {
  integration: true, 
  includeStackTrace: true
};

gulp.task('jshint', function() {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat.scripts', function () {
  return gulp.src(['app/**/*.js', '!app/**/*.spec.js'])
      .pipe(concat('all.js'))
      .pipe(concat.header('var vs = {};\n\n'))
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

// Default Task
gulp.task('default', ['jshint', 'concat.scripts', 'concat.tests', 'test']);