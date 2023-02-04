const {src, dest,watch}= require('gulp');
const sass= require('gulp-sass')(require('sass'));
const plumber= require('gulp-plumber');

function css(callback){
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'))
    callback()
}
function javascript(callback){
    src('src/js/**/*.js')
    .pipe(dest('build/js'))
    callback()
}
function dev(callback){
    watch('src/scss/**/*.scss',css);
    watch('src/js/**/*.js', javascript);
    callback();
}

exports.css=css;
exports.js=javascript;
exports.dev= dev;