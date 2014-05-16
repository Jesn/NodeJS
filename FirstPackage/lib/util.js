/**
 * Created by Administrator on 2014/5/17.
 */
/*
* 常用工具util
* util是一个Node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的功能国语精简的不足。
*util.inherits(constructor,superCOnstructor)是一个实现对象间原型继承的函数。JavaScript的面向对象特性是基于原型，于常见的基于类的不同。
* JavaScript没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
* */

/* util.inherits
* 我们定义了一个基础对象Base和一个继承自Base的Sub，Base有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits实现继承。
* 注意：Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承。同时，在原型中定义的属性不会被
* console.log作为对象的属性输出。
* */
var  util=require('util');

//构造函数
function Base(){
    //属性
    this.name='base';
    this.base=1991;

    //内部方法
    this.SayHello=function(){
        console.log('Hello '+this.name);
    };
}

//外部方法 【原型】
Base.prototype.showName=function(){
    console.log(this.name);
};

function Sub(){
  this.name='Sub';
}

util.inherits(Sub,Base);

var objBase=new Base();
objBase.showName();
objBase.SayHello();
console.log(objBase);

var objSub=new Sub();
objSub.showName();
console.log(objSub);


/*
* util.inspect
* util.inspect(object,[showHidden],[depth],[colors])是将一个任意对象转换为字符串的方法，
* 通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
* showHidden    是一个可选参数，如果值为true，将会输出更多隐藏信息。
* depth     表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不能指定depth，默认会递归2层，指定为null表示
* 将不限制递归层数完整遍历对象。
* colors    如果值为true，输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的特效。
*
* 特别要指出的是： util.inspect 并不会简单地直接把对象转换为字符串，即使该对象定义了tostring方法也不会调用。
* */
var util2=require('util');

function Person(){
    this.name='byvoid';
    this.toString=function(){
        return this.name;
    };
}

var obj=new Person();
console.log('一个参数:  %s',util2.inspect(obj));
console.log('两个参数:  %s',util2.inspect(obj,true));















