const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Aditya');
})

server.listen(4000);