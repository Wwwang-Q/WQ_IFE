/**
 * Created by wangqi on 2017/4/15.
 */
var http=require("http");
var url=require('url');
var exec=require ('child_process').exec;
var mongoose =require ('mongoose');

http.createServer(function (req,res) {
    if(req.url!='/favicon.ico'){
        console.log('request received!');    //每次刷新都会出现这个!!
        var queryobj=url.parse(req.url,true).query;
        console.log(queryobj);

        var cmdstr="phantomjs task2.js ";
        exec(cmdstr+queryobj.word+" "+queryobj.device,function (err,stdout,stderr) {
            console.log('进入子程序!');
            if(err) console.log(`exec error:${err}`);
            else {
                try{
                    console.log(JSON.stringify(stdout));
                }
                catch(err) {
                    res.writeHead(200,{"Content-type":'text/plain'})
                    return res.end(JSON.stringify({code:0,msg:"请查询数据是否正确",word:data.word}));
                }

                var resultSchema=new mongoose.Schema({
                    code: Number,
                    msg: String,
                    word: String,
                    device: String,
                    time: Number,
                    dataList: [{
                        info: String,
                        link: String,
                        pic: String,
                        title: String
                    }]
                });
                var Result=mongoose.model('Result',resultSchema);
                var result=new Result(JSON.parse(stdout));
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(stdout);

                mongoose.connect("mongodb://localhost/baidu");
                var db=mongoose.connection;
                db.on('error',console.error.bind(console,'connection error :'))
                db.once('open',function () {
                    console.log('mongodb connected!')
                })

                result.save(function (err,result) {
                    if(err) console.log(err);
                    else console.log(result);
                    db.close();   //关闭数据库
                })

            }
        })

    }

}).listen(8080);







