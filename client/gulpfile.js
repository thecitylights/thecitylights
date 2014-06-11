var fs = require('fs');
var gulp = require('gulp');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var es = require('event-stream');
var requirejs = require('requirejs');
var less = require('less');

gulp.task('clean', function () {
	return gulp.src('build/*', {read: false})
		.pipe(clean());
});
gulp.task('copy', ['clean'], function () {
	return es.concat(
		gulp.src('bower_components/**')
			.pipe(gulp.dest('build/bower_components')),
		gulp.src('config/**')
			.pipe(gulp.dest('build/config')),
		gulp.src('resources/**')
			.pipe(gulp.dest('build/resources'))

	);
});
gulp.task('js', ['clean'], function (done) {
	var success = function () {
		done();
	};
	requirejs.optimize({
		mainConfigFile: "config/require.js",
		baseUrl: '.',
		paths: {
			youtube: 'empty:' // loaded via cdn
		},
		name: 'main',
		optimize: 'uglify2',
		uglify2: {
			mangle: true
		},
		generateSourceMaps: false,
		preserveLicenseComments: false,
		out: 'build/main.js'
	}, success, done);
});
gulp.task('css', ['clean'], function (done) {
	fs.readFile('main.less', {encoding: 'utf8'}, function (error, data) {
		less.render(data, {
			paths: ['build/'],
			relativeUrls: true,
			compress: true,
			sourceMap: false,
			sourceMapBasepath: 'build/',
			sourceMapURL: 'main.css.map',
			writeSourceMap: function (data) {
				fs.writeFile('build/main.css.map', data);
			}
		}, function (error, css) {
			fs.writeFile('build/main.css', css);
			done(error);
		});
	});
});
gulp.task('index', ['clean', 'css'], function () {
	return gulp.src(['build/main.css'], {read: false})
		.pipe(inject('./index.html', {
			addRootSlash: false,
			ignorePath: '/build/'
		}))
		.pipe(gulp.dest('build/'));
});
gulp.task('default', ['clean', 'copy', 'js', 'css', 'index']);
