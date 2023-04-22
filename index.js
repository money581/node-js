//console.log("hello world! from node js")
const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{

      
        res.write('<html>');
        res.write('<head><title>my enter message</title><head>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form><body>');
        res.write('</html>');
        return res.end();
    })
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else {


        // if (url==='/home'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>my first page</title><head>');
        res.write('<body><h1>welcome home</h1><body>');
        res.write('</html>');
        res.end();
        //}
    }
});
server.listen(4000);
