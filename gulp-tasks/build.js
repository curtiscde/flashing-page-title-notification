var gulp = require("gulp");
var minify = require('gulp-minify');

gulp.task('build-js', function(){
  return gulp.src('./src/**/*.js')
  .pipe(minify({
      ext:{
          src:'-debug.js',
          min:'.min.js'
      }
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('build-demo', function(){
  return gulp.src('./src/demo/**')
    .pipe(gulp.dest('./dist/demo'));
});

gulp.task('build', gulp.series(['build-js', 'build-demo']));