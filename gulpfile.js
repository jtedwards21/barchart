var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('public/src/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/dist/css'))
);
