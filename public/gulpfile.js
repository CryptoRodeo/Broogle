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

let gulp = require('gulp'),
 imagemin   = require('gulp-imagemin'),
 autoprefix = require('gulp-autoprefixer'),
 concat     = require('gulp-concat'),
 cssMin     = require('gulp-minify-css'),
 terser      = require('gulp-terser');

 function done()
 {
    console.log("Task complete");
    return;
 }
 
function minimizeImages(done){
    var img_src = './src/images/**/*', img_dest = './build/images';
	gulp.src(img_src)
		.pipe(imagemin())
        .pipe(gulp.dest(img_dest))
    done();
 };

function styles(done){
    let cssDir = './src/styles/*.css';
    let cssBuildDir = './build/styles/';
    gulp.src([cssDir])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(cssMin())
    .pipe(gulp.dest(cssBuildDir));
    done();
};

// function syncBrowser(done)
// {
//     browserSync.init({
//         server:{
//             baseDir:"public"
//         },
//     });

//     browserSync.reload(({stream:true}));
// }

/**
 * Tasks can be called individually
 */
gulp.task("css-min", minimizeImages);
gulp.task("styles", styles);


//Or they can be caled in a series
gulp.task('default',gulp.series(minimizeImages, styles));

//  exports.default = defaultTask