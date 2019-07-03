/**
 * Gulp plugin details:
 * 
 * gulp-imagemin - Minimizes images
 * 
 * gulp-autoprefixer - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from 'Can I Use'. 
 * 
 * gulp-concat - Concats all CSS files into one single fine
 * 
 * gulp-minify-css - minifies the CSS file for faster rendering.
 */

let gulp    = require('gulp'),
 imagemin   = require('gulp-imagemin'),
 autoprefix = require('gulp-autoprefixer'),
 concat     = require('gulp-concat'),
 cssMin     = require('gulp-minify-css');

// gulp.task('imagemin', function() {
//     var img_src = './src/images/**/*', img_dest = './build/images';
 
//     gulp.src(img_src)
//     .pipe(imagemin())
//     .pipe(gulp.dest(img_dest));
//  });

let cssDir = './src/styles/*.css';
let cssBuildDir = './build/styles/';


 gulp.task('imagemin', () =>
 {
    var img_src = './src/images/**/*', img_dest = './build/images';
	return gulp.src(img_src)
		.pipe(imagemin())
        .pipe(gulp.dest(img_dest))
 }
);

gulp.task('styles', () => {
    return gulp.src([cssDir])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(cssMin())
    .pipe(gulp.dest(cssBuildDir));
});