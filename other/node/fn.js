/**
 * Created by wangqi on 2017/4/10.
 */
var a="global";
function fn() {
    console.log(a);
}
var b=function (ff) {   //怎么会取不到a呢??不是没有块级作用域吗?a不是全局变量吗?
   // console.log(a);
     let a=20;           //为什么改成a=20;就变成20了??  为什么对方法的两种声明方式结果相同??
  //  console.log(a);
    ff();
}
b(fn);
console.log(a);