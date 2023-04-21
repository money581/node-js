//console.log("hello world! from node js")
const http=require('http');
// function rqListener(req,res){

// }
//http.createServer(rqListener);
//we can also write this by anonymus function
// http.createServer(function(req,res){

// })
//we can also write as arrow function
 const server = http.createServer((req , res) => {
console.log('aman');
 });
 server.listen(4000);
