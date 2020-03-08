var gulp = require('gulp');
var uglify = require('gulp-uglify');  //js 压缩工具
var rename = require('gulp-rename');  //js 重命名工具
var concat = require("gulp-concat");  //js 合并文件工具

//默认任务注册
function defaultTask(cb) {
  // place code for your default task here
  console.log(`defaultTask --------------`)
  cb();
}

exports.default = defaultTask;

//测试任务 -----------------------------------

gulp.task('test', () => {
  console.log(`test`)
});

//The following tasks did not complete: 报错 需要加 async
gulp.task('test2', async () => {
  console.log(`test2 `)
  gulp.src('src/Core/fireflyx.core.camera.js')
    .pipe(gulp.dest('lib'))               //保存输出文件
});
//------------------------------------------
let src = ["src/**/*.js"];
let mainUrl = "lib/main.js";

//合并文件
gulp.task("concatjs", async () => {
  console.log(`concatJs start`)
  gulp.src(src)
    .pipe(concat("main.js"))  //合并文件 成 main.js
    .pipe(gulp.dest('lib'))
});

// 合并 + 压缩
//parallel 多个依赖嵌套 等待
gulp.task('minify', async () => {
  console.log(`minify start`)
  gulp.src(mainUrl)
    .pipe(uglify())       //压缩main.js
    .pipe(rename({suffix : '.min.js'})) //重命名
    .pipe(gulp.dest('lib'))
});

//parallel 并行执行
gulp.task("parallel", gulp.parallel("test","test2"));


// series 依赖顺序执行
gulp.task("series", gulp.series("test","test2"));


//watch 
gulp.task("watchB" , ()=>{
  gulp.watch(src,gulp.series('concatjs'));  //监听修改
  gulp.watch(mainUrl,gulp.series('minify'));
});