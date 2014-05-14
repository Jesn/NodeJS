/**
 * Created by Administrator on 2014/5/12.
 */
/*
* Author:Darren
* Date:2014-5-12
* Desc:Nodejs初学联系
* */

/*创建我的第一个NodeJS  HTTP服务器*/

var http=require('http');
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Hello Word</h1>');
        res.end('<p>game over</p>');
    }).listen(3000);
console.log("HTTP Server is listening at port 3000");