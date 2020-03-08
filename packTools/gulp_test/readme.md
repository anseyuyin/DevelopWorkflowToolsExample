#描述
    gulp 使用简单demo

#资料链接
    官网 ： https://www.gulpjs.com.cn/

    教程 ： https://javascript.ruanyifeng.com/tool/gulp.html
         ： https://blog.csdn.net/davidpan1234/article/details/93496877

#构建
    step1: 全局安装
        npm install -g gulp
    step2: 使用依赖模块安装
        npm install --save-dev gulp
        npm install --save-dev gulp-uglify
        npm install --save-dev gulp-concat
        npm install --save-dev gulp-rename

#测试
    默认: gulp 
    合并文件: gulp concatjs
    压缩js文件: gulp minify
    监听修改 : gulp watchB

#常见问题
    1.gulpfile.js  not found
        需要手动添加 gulpfile.js 到 root 目录

    2.The following tasks did not complete ： xxx \n  Did you forget to signal async completion?
    函数定义前 加 async 