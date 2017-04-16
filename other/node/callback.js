/**
 * Created by wangqi on 2017/4/10.
 */
var c=2;
function add(callback,c) {
    setTimeout(function () {
        c++;
        callback(c);
    },1000);
}
function plus(c) {
    console.log(19*c);
}

add(plus,c);