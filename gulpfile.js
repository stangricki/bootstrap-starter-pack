const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './src/scss/**/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'))
		.pipe(browserSync.stream());
})

gulp.task('js', function() {
	gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/umd/popper.min.js'])
		.pipe(gulp.dest('./src/js'))
		.pipe(browserSync.stream());
})