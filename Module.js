/**
 * Created by Administrator on 2014/5/13.
 */


/*
* 创建一个包，并且提供exports公开接口
* */

/*初步*/
/*
var name;
exports.setName=function (thyName)
{
    name=thyName;
}

exports.sayHello=function(){
    console.log('Hello'+name +'你已经学会创建Node.js包咯哦，太聪明~\(≧▽≦)/~啦啦啦');
}
 */

function Hello(){
    var name;
    this.setName=function(thyName){
        name=thyName;
    };
    this.sayHello=function(){
        console.log('hello'+name);
    };
};
//原始的exports
//exports.Hello = Hello;
//简化后的exports
/*
* 警告：不可以通过对exports直接赋值代替module.exports赋值。
* exports实际上只是一个和module.exports指向同一个对象的变量，
* 它本身会在模块执行结束后释放，但module不会，因此只能通过指定
* module.exports来改变访问接口
* */
module.exports=Hello;
