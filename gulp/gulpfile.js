const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');



// BROWSER-SYNC
gulp.task("reload", () => {
    browserSync.reload();
});


gulp.task("serve", ['sass'], () => {
    browserSync({
        server: "../"
    });
    gulp.watch("../*.html", ["reload"]);
    gulp.watch("../_assets/style/sass/**/*.scss", ['sass']);
    gulp.watch("../_assets/script/**/*.js", ["reload"]);
});


// SASS_COMPILER
gulp.task('sass', function () {
    return gulp.src(['../_assets/style/sass/style.scss','../_assets/style/sass/normalize/normalize.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../_assets/style'))
    .pipe(browserSync.stream());
});



// DEFAULT_TASK
gulp.task("default", ["serve"]);