#工程结构
  + 整个工程以index.html文件为入口。index利用ajax请求其他页面
  + 每一个独立页面都是独立的，可以单独打开startup.html 或者 login.html 或者其他的一些文件。
  + 开发的时候可以单独开发每一个独立页面，不用管其他页面
  + index里面需要包含所有需要的资源，主要就是样式表
  + 因为使用了ajax，项目一定要用server来打开，直接双击打开是不能工作的。
