// /**
//  * Created by wangqi on 2017/4/13.
//  */
// var mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/myDB');
// var db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection:error:'));
// db.once('open',function () {
//     console.log('MongoDB connected!');
// });
//
//
// var mySch=mongoose.Schema({name:String}); //defines the shape of the documents within that collection.
// mySch.method.speak=function () {
//     var greeting=this.name?"The pet's name is"+this.name:"I don't have a name.";
//     console.log(greeting);
// }
//
// var myMod=mongoose.model('myMod',mySch);  //compiling our schema into a Model.A model is a class with which we construct documents.
// var pet=new myMod({name:'cat'});
// pet.speak();
//
// pet.save(function(err, pet) {
//     if (err) {
//         console.error(err);
//     } else {
//         pet.speak();
//     }
// });
//
//
// 连接数据库
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/baidu');

// 添加数据库连接失败和打开时的回调
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('mongoose connected!')
});

// 定义一个Schema
var resultSchema = new mongoose.Schema({
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

// 编译定义好的Schema
var Result = mongoose.model('Result', resultSchema);

// 新建一个文档

var result = new Result({msg:'cfd'});

// 将文档保存到数据库
result.save(function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});