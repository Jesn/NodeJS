/**
 * Created by Administrator on 2014/5/17.
 */
/*
* 常用工具util
* util是一个Node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的功能国语精简的不足。
*
* */

var  util=require('util');

function Base(){
    this.name='base';
    this.base=1991;

    this.SayHello=function(){
      console.log('Hello '+this.name);
    };
}

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