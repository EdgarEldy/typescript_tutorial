var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

//Starting compile typescript to javascript
gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});
