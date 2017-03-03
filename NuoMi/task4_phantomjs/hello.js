/**
 * Created by wangqi on 2017/3/1.
 */
var page=require('webpage').create();

page.open('http://www.cnblogs.com/front-Thinking',function (status) {
    if(status=="success"){
        console.log(page.title);
    }else{
        console.log("fail");
    }
    phantom.exit(0);
});