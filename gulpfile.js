const gulp = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('bundle', () => {
	return browserify({entries: './app.js', debug: true})
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', ['bundle'], () => {
	gulp.watch('*.js', ['bundle']);
});

gulp.task('clean-bundle', () => del('./bundle.js', {force: true}));

gulp.task('default', ['watch']);