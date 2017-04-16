/**
 * Created by wangqi on 2017/4/10.
 */
/*通过call来实现继承。Boy继承了Girl的所有性质。*/

function Girl(name) {
    this.name=name;
    this.getName=function () {
        console.log(this.name);
    }
}
Girl.prototype.getName=function () {
    console.log("原型名字");
}
Girl.prototype.age=function () {
    console.log('原型年龄')
}

function Boy(name) {
     Girl.call(this,name);
}

var Peter=new Boy('Peter');
var Mary=new Girl('Mary');
Peter.getName();       //'Peter'————通过call继承了Girl构造函数中的性质
//Peter.age();           //not a function————无法继承Girl原型中的性质。与Girl原型毫无关系。
Mary.getName();        //"Mary"————会先查找实例中是否有该方法,因此原型中的同名方法不被执行。
Mary.constructor.prototype.getName();  //"原型名字"————执行原型同名方法的方式:Mary.constructor指向Girl。

Girl.prototype={                       //这种对象赋值的方法等同于重写原型。若放在实例化之后,会切断实例与原型的联系。
    constructor:Girl,
    age:function () {
        console.log('新原型年龄');
    }
};

Mary.age();                             //"原型年龄"————实例仍指向旧原型,与新原型无关
Mary.constructor.prototype.age();       //"新原型年龄"————构造方法的prototype指向新原型
Mary.constructor.prototype.getName();   //not a function————新原型中无getName()方法。


Girl('jj');   //直接这样执行,this指向Windows,将name挂到windows上
getName();  //"jj"————读取了Windows上的name.

/*注意getName()方法没有写在Girl的原型中。所以不能通过*/

//想到了什么闭包将私有性质暴露出来。可是也可以通过创建实例得到私有性质??那个说的是没办法取到构造方法的私有属性吗?