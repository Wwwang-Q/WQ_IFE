/**
 * Created by wangqi on 2017/3/2.
 */
var page =require('webpage').create();
var system=require('system');
var url="https://www.baidu.com";
var content;

page.open(url,function (status) {
    if (status!=="success"){
        console.log("Fail to render!");
    }else {

        content=page.evaluate(function (){
            var keyWord=document.getElementById('kw');
            var btn=document.getElementById('su');
            keyWord.value="key";
            btn.click();
            return keyWord.value;
        });

        window.setTimeout(function () {
            page.render("test.png");
            phantom.exit();
        },3000);
    };

})

//运行命令: phantomjs test1.js keyword