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
    const url=req.url;
    if (url==='/home'){
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><h1>welcome home</h1><body>');
        res.write('</html>');
        res.end();
    }
    else if (url==='/about'){
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><h1> Welcome to About Us page</h1><body>');
        res.write('</html>');
        res.end();
    }
   else if (url==='/node'){
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><h1> Welcome to my node js project</h1><body>');
        res.write('</html>');
        res.end();
    }
//console.log('aman');
 });
 server.listen(4000);
