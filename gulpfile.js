var gulp = require("gulp");
var deploy = require("gulp-gh-pages");

gulp.task("publish", function() {
    return gulp.src("_book/\*\*/\*.\*")
        .pipe(deploy())
        .on("error", function(err) {
            console.log(err);
        });
});