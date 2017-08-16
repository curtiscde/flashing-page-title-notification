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
