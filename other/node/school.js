/**
 * Created by wangqi on 2017/3/30.
 */
var students=require('./student');
students.add('wangqi');
//students.sub('lala');
var wang=new students();
console.log(wang.work(1,3));
console.log(wang.age);
