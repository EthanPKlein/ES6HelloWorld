var gulp = require('gulp'),
livereload = require('gulp-livereload');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('js/*.js', ['js']);
});