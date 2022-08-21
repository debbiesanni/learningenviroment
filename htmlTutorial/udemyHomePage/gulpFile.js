const gulp = require('gulp'); 
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function CSS(){
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css'))
}

function watchFile(){
    gulp.watch('scss/*.scss', CSS);
    gulp.watch('index.html');
}

gulp.task('css', CSS)
gulp.task('watch', gulp.parallel(watchFile))