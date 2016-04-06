const gulp = require('gulp');
const eslint = require('gulp-eslint');

var files = ['index.js', 'gulpfile.js', 'bin/*', 'lib/*'];

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*module_test.js')
    .pipe(eslint({
      rules: {
        'indent': [error, 2]
      },
      envs: [
        'mocha'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('link:nontest', () => {
  return gulp.src(files)
    .pipe(eslint({
      rules: {
        'indent': [error, 2]
      }
    }))
    .pipe(eslint.format());
});

gulp.task('lint', ['link:test', 'link:nontest']);
gulp.task('default', ['lint']);
