var gulp       = require('gulp');
var sass       = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var plumber    = require('gulp-plumber');
var webserver  = require('gulp-webserver');
var opn        = require('opn');
var bower      = require('gulp-bower');

var config = {
  sassPath: './source',
  bowerDir: './source/vendor',
  host    : 'localhost',
  port    : '8080'
}

gulp.task('bower', function() {
  return bower({directory: config.bowerDir});
});

gulp.task('icons', function() {
  return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
          .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function() {
  return gulp.src('./source/main.scss')
            .pipe(plumber())
            .pipe(sass({
              errLogToConsole: true,
              onError: function (e) {
                console.log('sass error is ', e);
              }
            }))
            .pipe(autoprefix('last 2 version'))
            .pipe(gulp.dest('./public/css'));
});

gulp.task('webserver', function() {
  gulp.src('./public')
    .pipe(webserver({
      host:             config.host,
      port:             config.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  // immediately opening tab didn't work for me => this workaround =(
 // setTimeout(opn.bind(opn, 'http://' + config.host + ':' + config.port ), 2000)
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('setup', ['bower', 'icons', 'css']);

gulp.task('default', ['setup', 'webserver', 'watch', 'openbrowser']);