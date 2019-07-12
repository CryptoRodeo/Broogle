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

const gulp = require('gulp'),
 imagemin   = require('gulp-imagemin'),
 autoprefix = require('gulp-autoprefixer'),
 concat     = require('gulp-concat'),
 cssMin     = require('gulp-minify-css'),
 postCSS    = require('gulp-postcss'),
 cssImport  = require('postcss-import'),
 cssVars    = require('postcss-simple-vars'),
 watch  = require('gulp-watch');

//Postcss plugins
const plugins = [
    cssImport,
    cssVars
];
const cssDir = './src/styles/*.css';
const buildDir = './build/styles/';

function minimizeImages(done){
    var img_src = './src/images/*', img_dest = './build/images/';
	gulp.src(img_src)
	.pipe(imagemin())
    .pipe(gulp.dest(img_dest))
    done();
 };

function styles(cb){
    let cssDir = './src/styles/*.css';
    let cssBuildDir = './build/styles/';
    gulp.src([cssDir])
    .pipe(postCSS(plugins))
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(cssMin())
    .pipe(gulp.dest(cssBuildDir))
    cb();
};
exports.styles = styles;

/**
 * Tasks can be called individually
 */
gulp.task("css-min", minimizeImages);
gulp.task("styles", styles);

gulp.watch(cssDir,styles);
exports.default = (styles) => {
    styles();
};
