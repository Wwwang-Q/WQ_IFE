/**
 * Created by wangqi on 2017/4/15.
 */
var http=require("http");
var url=require('url');
var exec=require ('child_process').exec;
var mongoose =require ('monogoose');

http.createServer(function (req,res) {
    console.log('request received!');    //每次刷新都会出现这个!!
    res.writeHead(200,{"Content-type":"text/plain"});
    res.write('Hello World!');

    res.end();
}).listen(8080);
var queryobj=url.parse(req.url,true);
console.log(queryobj);
var cmdstr="phantomjs task2.js ";
exec(cmdstr+queryobj.word+" "+queryobj.device,function (err,stdout,stderr) {
    if(err) console.log(`exec error:${err}`);
    else {

    }
})
var db=mongoose.connect("mongodb://localhost/baidu");
db.on('error',console.error.bind(console,'connection error :'))
db.once('open',function () {
    console.log('mongodb connected!')
})
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
var Result=new mongoose.model('Result',resultSchema);
var result=new Result(JSON.parse(stdout));
result.save(function (err,result) {
    if(err) console.log(err);
    else console.log(result);
})




