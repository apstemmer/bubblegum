let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('hello', ()=>{
  console.log("this works");
});

gulp.task('sass', ()=>{
  return gulp.src('app/scss/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/styles'))
});

gulp.task('watch', ()=>{
  gulp.watch('app/scss/*.scss',['sass']);
});
