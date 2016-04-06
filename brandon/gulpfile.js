const gulp = require('gulp');
const eslint = require('gulp-eslint');
const watch = require('gulp-watch');
const mocha = require('gulp-mocha');

var files = ['index.js', 'gulpfile.js', 'bin/*', 'lib/*'];
var gulpFiles = ['index.js', 'gulpfile.js', 'bin/*', 'lib/*', 'test/*', 'package.json'];

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules: {
        'indent': ['error', 2]
      },
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(files)
    .pipe(eslint({
      rules: {
        'indent': ['error', 2]
      },
      envs: [
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('mocha:test', () => {
  return gulp.src('./test/**/*test.js', {read:false})
    .pipe(mocha());
})

gulp.task('rerun', () => {
  gulp.watch(gulpFiles, ['lint']);
});

gulp.task('lint', ['lint:test', 'lint:nontest', 'mocha:test']);
gulp.task('default', ['rerun']);
