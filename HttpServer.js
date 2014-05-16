/**
 * Created by Administrator on 2014/5/13.
 */
var http=require('http');
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Node.js</h1>');
        res.end('<p>Hello word</p>');
    }).listen(3000);

console.log("HTTP server is listening port 3000");
