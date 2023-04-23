//console.log("hello world! from node js")
const http = require('http');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('in the middleware')
    next();  //aloow to request to continue to the next middleware
});
app.use((req,res,next)=>{
    console.log('another middleware');
    res.send('<h1>hello from express js!</h1>');
    
});
app.listen(3000);
