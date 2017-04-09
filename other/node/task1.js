/**
 * Created by wangqi on 2017/3/30.
 */
var http=require('http');   //模块
var server=http.createServer(function (req,res) { //请求体和响应体
    //req 请求信息:从哪个url过来,是get还是post
    res.writeHead(200,{'Content-Type':'text/plain'});
    //返回200状态码 代表成功,返回文本类型是text
    res.end('Hello node.js\n');
});
server.listen(1337,'127.0.0.1');  //监听请求,当有请求时,调用匿名回调函数
console.log('Server running at http://127.0.0.1:1337/');

//更改内容后需要重启服务器

/*核心模块http fs path...
本地模块 var util=require('./util.js')
第三方模块 va r promise=require('bluebird')*/

//URI
//URL 统一资源定位