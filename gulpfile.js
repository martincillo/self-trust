/* importar las dependencias */
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      pug = require('gulp-pug'),
      bsync = require('browser-sync').create()

/* Definir tarea */

gulp.task('serve', () => {
  bsync.init({
    server: './dist'
  })

  gulp.watch('./dev/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('./dev/views/**/*.pug', gulp.series('pug'))
})

gulp.task('sass', () => 
  gulp.src('./dev/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(bsync.stream())
)

/* Definir tarea */
gulp.task('pug', () => 
    gulp.src('./dev/views/pages/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./dist/'))
      .pipe(bsync.stream())
)

gulp.task('default', gulp.series('serve'))