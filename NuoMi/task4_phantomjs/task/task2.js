/**
 * Created by wangqi on 2017/3/3.
 */

//phantom.outputEncoding = 'gbk';
    //执行命令示范   phantomjs  task2.js key ipad;
var page =require('webpage').create();
var system=require('system');
var fs=require('fs');
var key=system.args[1];
var device=system.args[2]||"pc";
var url="https://www.baidu.com/s?wd="+encodeURI(key);
var time=Date.now();
var data={};

//根据device设置网页. 目前只适用ipad
var content=fs.read('config.json');
content = eval("(" + content + ")");
var config=content[device];
var ua=JSON.stringify(config.UA);
var sizeX=JSON.stringify(config.width);
var sizeY=JSON.stringify(config.height);
page.settings.userAgent=ua;
page.viewportSize={width:sizeX,height:sizeY};

page.open(url,function (status) {
    if (status!=="success"){
        time = Date.now() - time;
        data={
            code:0,
            msg:'抓取失败',
            word:key,
            time:time,
            device:device
        };
        data=JSON.stringify(data,null,4);
        console.log(data);
        fs.write("task.json",data,'w');
        phantom.exit();
    }else {
        page.includeJs("https://code.jquery.com/jquery-3.1.1.min.js",function () {
            data=page.evaluate(function (time,key,device){
                var tmp=[];
                if(device=="ipad"||device=="pc"){
                    var total=$('.c-container');
                    for(var i=0;i<total.length;i++){
                        var list={};
                        list.title=$(total[i]).find('.t').text().trim();
                        list.info=$(total[i]).find('.c-abstract').text();
                        list.link=$(total[i]).find('.t a').attr('href');
                        var pic=$(total[i]).find('c-img');
                        list.pic=pic.length?pic.attr('scr'):'';
                        tmp.push(list);
                    }
                }
                else if(device=="iphone5"||device=="iphone6"){
                    var total=$('.c-result');
                    for(var i=0;i<total.length;i++){
                        var list={};
                        list.title=$(total[i]).find('.c-title').text().trim();
                        list.info=$(total[i]).find('.c-line-clamp3').text();
                        list.link=$(total[i]).find('.c-blocka').attr('href');
                        var pic=$(total[i]).find('.c-img-s img');
                        list.pic=pic.length?pic.attr('scr'):'';
                        tmp.push(list);

                    }
                }
                else return "wrong device type!";


                return JSON.stringify({
                    code:1,
                    msg:'抓取成功',
                    word:key,
                    time:time,
                    device:device,
                    dataList:tmp
                },null,4);

            },time,key,device);
            fs.write("task3.json",data,'w');
            console.log(data);
            phantom.exit();
        });
    }

});