var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var autoprefixer = require('autoprefixer-stylus');
var cssmin = require('gulp-cssmin')

gulp.task('dev-css', function () {
	return gulp.src('styles.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'));
});

gulp.task('rel-css', function () {
	return gulp.src('styles.styl')
		.pipe(stylus({
			'include css': true,
			use: [autoprefixer('iOS >= 7', 'last 1 Chrome version')],
			compress: true
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('./'))
});


gulp.task('watch', function () {
	gulp.watch('*.styl', ['dev-css']);
});

gulp.task('default', ['watch']);
