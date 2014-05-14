/**
 * Created by Administrator on 2014/5/13.
 */

/*
* Node.js的事件循环机制
* Node.js在什么时候会进入事件循环呢？答案是Node.js程序由事件循环开始，到事件循环结束，所有的逻辑都是事件的回调函数，所以Node.js始终
* 在事件循环中，程序入口就是事件循环第一个事件的回调。事件的回调函数在执行的过程中，可能会发出I/O请求活直接发射（emit）事件，执行完毕后
* 再返回事件循环，事件循环会检查事件队列中有没有未处理的事件，知道程序结束。
* */

/*
* Event事件Demo
* */

//申明一个事件
var EventEmitter=require('events').EventEmitter;
//实例化一个事件
var event=new EventEmitter();
//event注册一个事件监听器
event.on('some_event',function(){
    console.log('some_event occured');
});
//通过setTimeout在1000毫秒后向event对象发送some_event事件
setTimeout(function(){
    event.emit('some_event');
},1000);