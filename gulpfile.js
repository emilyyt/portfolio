/* ----------------------------------
* gulpfile.js
*
* Author: Emily Tsai
* Date: March 2016
*
* Build tasks and related functions
* Refer to https://travismaynard.com/writing/getting-started-with-gulp 
*/

// ========Dependencies==============

'use strict';

// include gulp
var gulp = require('gulp');

//plugins for JS and styles
var rename = require('gulp-rename');
var del = require('del');

// ========Globals====================

var SRC_PATH = {
	jsMain: 'src/js/main.js',
	javascript: 'src/js/*.js',
	styles: 'src/styles/*.scss',
	images: 'src/images/*'
}

var DEST_PATH = {
	javascript: 'build/js',
	styles: 'build/styles',
	images: 'build/images'
}

// =========JS Tasks===================
/*Tasks include checking js errors with jshint, 
using del to clean out old js files,
using uglify to minify js
using sourcemaps to map from the minified files
using stylish to report and organize the error logging
using plumber to prevent watch from stopping at a syntax error
using browserify to create modular js and then bundle it
using gutil, tap and buffer to sort out the stream compatibility
issue between gulp and browserify (see https://github.com/gulpjs/gulp/pull/1380)
*/

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var browserify = require('browserify');
//var transform = require('vinyl-transform');
//var source = require('vinyl-source-stream')
var gutil = require('gulp-util');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');

//This resolves the gulp watch stopping issue in the script task
var plumber = require('gulp-plumber');



// concat, minify and clean src js files
gulp.task('scripts', ['clean-js'], function() {



	return gulp.src([SRC_PATH.jsMain],  {read: false})
	// transform file objects using gulp-tap plugin
    .pipe(tap(function (file) {
	 
	   gutil.log('bundling ' + file.path);

	   // replace file contents with browserify's bundle stream
	   file.contents = browserify(file.path, {debug: true}).bundle();

	 }))
	 
	.pipe(buffer())
	.pipe(plumber())
	.pipe(sourcemaps.write())
	.pipe(concat('all.js'))
	.pipe(gulp.dest(DEST_PATH.javascript))
	.pipe(rename('bundle.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(DEST_PATH.javascript));
});

// lint task: check and report js errors
gulp.task('lint', function(){
	return gulp.src(SRC_PATH.javascript)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('clean-js', function() {
	del([DEST_PATH.javascript+'/*.js', 
			'!'+DEST_PATH.javascript+'/lib/*.js']);
});



//=========Style Tasks====================
/* Tasks include using sass to convert scss to css,
autoprefixer to add vendor prefixes to css styles,
use del to remove unused css files excluding library files,
creating a sourcemap

*/


var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// removes other unused files minus any libraries
gulp.task('clean-styles', function(){
	del([DEST_PATH.styles+'/*.css', '!'+DEST_PATH.styles+'/lib/*.css']);
});

// compile sass
gulp.task('styles', ['clean-styles'], function() {
	return gulp.src(SRC_PATH.styles)
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions']
	}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename('style.min.css'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(DEST_PATH.styles));
});


//=========Image Tasks====================

var image = require('gulp-image');

gulp.task('clean-images', function(){
	del([DEST_PATH.images+'/*'])
});

gulp.task('image', ['clean-images'], function() {
	gulp.src(SRC_PATH.images)
	.pipe(image({
		pngquant: true,
		optipng: false,
		jpegoptim: true,
		mozjpeg: true,
		gifsicle: true,
		svgo: true
	}))
	.pipe(gulp.dest(DEST_PATH.images));
});

//=========Watch Tasks====================

gulp.task('watch', function() {
	gulp.watch(SRC_PATH.javascript, ['lint', 'scripts']);
	gulp.watch(SRC_PATH.styles, ['styles']);

})

gulp.task('default', 
	['lint', 
	'styles', 
	'scripts',
	'image', 
	'watch']);