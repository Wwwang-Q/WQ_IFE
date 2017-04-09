/**
 * Created by wangqi on 2017/3/30.
 */
function add(name) {
    console.log("Add student:"+name);
}
function sub(name) {
    console.log("remove:"+name);
}
function Student() {
     this.age="18";
    this.home="Beijing";
}
Student.prototype.work=function (a,b) {
    console.log("作业是:"+(a+b));
};

module.exports=Student;
module.exports.add=add;
module.exports.sub=sub;