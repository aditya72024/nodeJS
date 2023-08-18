const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url == '/' || req.url == '/home' ){
        res.write('<html><head><title>Hello There</title></head><body>Welcome to home!!</body></html>')

    }else if(req.url == '/about'){
        res.write('<html><head><title>Hello There</title></head><body>Welcome to about!!</body></html>')

    }else if(req.url == '/node'){
        res.write('<html><head><title>Hello There</title></head><body>Welcome to nodejs project!!</body></html>')

    }
    
    res.end();
})

server.listen(4000);