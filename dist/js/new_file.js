var gulp=require("gulp"),sass=require("gulp-sass"),connect=require("gulp-connect"),uglify=require("gulp-uglify"),minifyCss=require("gulp-minify-css"),imagemin=require("gulp-imagemin");gulp.task("copy-index",function(){return gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload())});(gulp=require("gulp")).task("scripts",function(){return gulp.src("js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"))}),gulp.task("sass",function(){return gulp.src("sass/*.scss").pipe(sass()).pipe(minifyCss()).pipe(gulp.dest("dist/css"))}),gulp.task("images",function(){return gulp.src("images/**").pipe(imagemin()).pipe(gulp.dest("dist/images"))}),gulp.task("watch",function(){gulp.watch("*.html",["copy-index"]),gulp.watch("images/**",["images"]),gulp.watch("sass/*.scss",["sass"]),gulp.watch("js/*.js",["scripts"])}),gulp.task("sever",function(){connect.server({root:"dist",livereload:!0})}),gulp.task("default",["sever","watch"]);