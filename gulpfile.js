const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './src/scss/**/*.scss'])
		.pipe(sass().on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end')
		}))
		.pipe(gulp.dest('./src/css'))
		.pipe(browserSync.stream());
})

gulp.task('js', function() {
	gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/umd/popper.min.js'])
		.pipe(gulp.dest('./src/js'))
		.pipe(browserSync.stream());
})

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "./src"
		}
	})

	gulp.watch(['./node_modules/bootstrap/scss/bootstrap.scss', './src/scss/**/*.scss'], function(){
		gulp.start('sass')
	});

	gulp.watch("./src/*.html", function(){
		browserSync.reload()
	})
})

gulp.task('fonts', function(){
	gulp.src('./node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest("./src/fonts"))
})

gulp.task('fa', function(){
	gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('src/css'))
})

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);