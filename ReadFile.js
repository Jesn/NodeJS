/**
 * Created by Administrator on 2014/5/13.
 */
/*NodeJS  使用异步的方式读取文件*/

/*异步的方式读取文件
* 异步的方式，因为读取txt文件的时候遇到阻塞，被加入到队列中，
* 继续执行下面的，即：先显示 end，  end执行完后，返回来执行文件读取，并且毁掉data
* */
var fs=require('fs');
fs.readFile('C:/test.txt','utf-8',function(err,data){
   if(err){
       console.log(err);
   }else{
       console.log("异步方式读取文件："+data);
   }
});
console.log('end');

/*同步的方式读取文件
* 同步读取，按照顺序执行，只有当txt读取完成后，才会执行end2
* 所以txt在上面   end2在下面
* end2执行完成后，进入事件循环监听事件，当I/O接到事件顺换的时候主动回调函数来完成任务
*
* 在nodejs中并不提倡使用同步I/O
* */

var fs2=require('fs');
var data2=fs.readFileSync('C:/test.txt','utf-8');
console.log("同步方式读取文件"+data2);
console.log('en2');