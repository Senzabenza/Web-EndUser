'use strict';

var gulp = require('gulp');

var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('./static/build')
        .pipe(clean());
});

gulp.task('copy-src', ['clean'], function() {
    return gulp.src(['./static/src/**', '!./static/src/index.html', '!./static/src/app/recources/EnvCfg.js'])
        .pipe(gulp.dest('./static/build'));
});

gulp.task('copy-staging', ['copy-src'], function() {
    return gulp.src('./static/staging/**')
        .pipe(gulp.dest('./static/build'));
});

gulp.task('copy-production', ['copy-src'], function() {
    return gulp.src(['./static/production/**'])
        .pipe(gulp.dest('./static/build'));
});

/* --------------------------------
 * -------- STAGING TASK ----------
 * --------------------------------*/
gulp.task('heroku:staging', ['copy-staging'], function(){
    process.exit(0);
});

/* --------------------------------
 * ------- PRODUCTION TASK --------
 * --------------------------------*/
gulp.task('heroku:production', ['copy-production'], function(){
    process.exit(0);
});