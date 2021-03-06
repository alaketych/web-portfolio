const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

gulp.task('html', () => {
    gulp.src('./*.html')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('sass', done => {
    gulp.src('styles/sass/**/*.sass')
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(gulp.dest('styles/css'))
        .pipe(browserSync.reload({ stream: true }))

    done()
})

gulp.task('js', () => {
    gulp.src('javascript/*.js')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './',
        }
    })
})

gulp.task('watch', () => {
    gulp.watch('./*.html', gulp.parallel('html'))
    gulp.watch('javascript/*.js', gulp.parallel('js'))
    gulp.watch('styles/sass/**/*.sass', gulp.parallel('sass'))
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))