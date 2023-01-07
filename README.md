# consoleLogStyle
```js

import log from "./LogStyle.js"//导入

log.log("info")//默认打印

//样式1
log.a("success") //默认
log.a("info", "success") //自定义标题
log.a("title", "success", "#424242", "#52b138", "#FFF", "#FFF") //自定义标题,颜色

//样式2
log.b("success") //默认
log.b("fail", "red", "#FFF") //自定义颜色

//样式3
log.c("打印数据"); //默认
log.c("success", "打印数据"); //自定义标题
log.c("fail", "打印数据", 'red'); //自定义标题,颜色
```
