let gulp = require('gulp'),
 imagemin = require('gulp-imagemin');

// gulp.task('imagemin', function() {
//     var img_src = './src/images/**/*', img_dest = './build/images';
 
//     gulp.src(img_src)
//     .pipe(imagemin())
//     .pipe(gulp.dest(img_dest));
//  });


 gulp.task('imagemin', () =>
 {
    var img_src = './src/images/**/*', img_dest = './build/images';
	return gulp.src(img_src)
		.pipe(imagemin())
        .pipe(gulp.dest(img_dest))
 }
);