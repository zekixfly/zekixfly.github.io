var gulp = require('gulp'),
  	gulpCompass = require('gulp-compass'),//sass or scss covert css
  	gulpWebServer = require('gulp-webserver'),
    gulpConcat = require('gulp-concat'),//js or css's concat
    gulpMinifyCSS = require('gulp-minify-css'),//minify css
    gulpUglify = require('gulp-uglify'),//minify js
    gulpImagemin = require('gulp-imagemin'),//minify image
  	gulpRename = require('gulp-rename'),
    gulpClean = require('gulp-clean'),//delete file
    gulpPlumber = require('gulp-plumber'),//使用 gulp-plumber 處理例外
  	gulpHtmlReplace = require('gulp-html-replace'),
    gulpNotify = require('gulp-notify');


gulp.task('compass', function() {
	gulp.src('./sass/*.sass') //all sass files
	.pipe(gulpPlumber())// 使用 gulp-plumber 處理例外
  .pipe(gulpCompass({
		css: './css/',
		sass: './sass/',
		style: 'nested', //nested, expanded, compact, compressed
		sourcemap: false,
		time: true,
		comments: false
	}))
	.pipe(gulpNotify('All Sass convert Css are Finish!'));
	// .pipe(gulp.dest('./gulp-output/zekistory/css/'));
});

//css minify
gulp.task('minify-css', function() {
  return gulp.src('./src/style/css/ABStyle.css')
    .pipe(gulpMinifyCSS({
       keepBreaks: true,
    }))
    .pipe(gulpRename(function(path) {
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(gulp.dest('./server/css/'))
    .pipe(gulpNotify('Css was been minfied and outputed to server\'s css folder!'));
});



//css concat
gulp.task('jsConcat', function() {
    return gulp.src('./src/script/js/*.js')
        .pipe(gulpConcat('app.js'))
        .pipe(gulp.dest('./src/script/minifyjs/'))
        .pipe(gulpNotify('All JS were been merged to minifyjs\'s folder!'));
});

//js minify
gulp.task('jsuglify', ['jsConcat'], function() {
    return gulp.src('./src/script/minifyjs/app.js')
        .pipe(gulpPlumber())// 使用 gulp-plumber 處理例外
        .pipe(gulpUglify())
        .pipe(gulpRename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./server/js/'))
        .pipe(gulpNotify('JS has been uglified and output to server\'s js folder!'));
});


//For safety files and folders outside the current working directory can be removed only with option force set to true.
gulp.task('clean-image', function() {
  return gulp.src('./server/img/**')
  .pipe(gulpPlumber())// 使用 gulp-plumber 處理例外
  .pipe(gulpClean({force: true}));
});


gulp.task('imagemin', function() {
  gulp.src('./src/img/**')
  .pipe(gulpImagemin())
  .pipe(gulp.dest('./server/img/'))
  .pipe(gulpNotify('Image has been minified and output to server\'s img folder!'));
});


//For safety files and folders outside the current working directory can be removed only with option force set to true.
gulp.task('clean-index', function() {
  return gulp.src('./server/index.html')
  .pipe(gulpPlumber())// 使用 gulp-plumber 處理例外
  .pipe(gulpClean({force: true}));
});


gulp.task('html-replace', ['clean-index'], function() {  
  return gulp.src('./src/index.html')
    .pipe(gulpPlumber())// 使用 gulp-plumber 處理例外
    .pipe(gulpHtmlReplace({
        'css': './css/ABStyle.min.css',
        'js': './js/app.min.js'
    }))
    .pipe(gulp.dest('./server/'))
    .pipe(gulpNotify('html has been replaced and output to server\'s folder!'));
});

gulp.task('watch', function() {  
	gulp.watch('./sass/*.sass',['compass']);
	gulp.watch('./css/*.css',['minify-css']);
	gulp.watch('./scripts/*.js',['jsuglify']);
  gulp.watch('./img/**',['clean-image','imagemin']);
	gulp.watch('./index.html',['html-replace']);
});





gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(gulpWebServer({
		port: 1234,
		livereload: true,
		directoryListing: false,
		open: true,
		fallback: 'index.html'
	}));
});

gulp.task('default',['compass','webserver','watch']);