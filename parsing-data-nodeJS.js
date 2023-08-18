const http = require('http');
const server = http.createServer((req,res)=>{
const fs = require('fs');    




    

    const url = req.url;
    const method = req.method;


    console.log(url,method);

    if(url == '/'){
        const completeMessage = []; 
        fs.readFile("message.txt", "utf8", (err, data) => {
            
                if (!err) {
             
                        completeMessage.push(data);
                } else {
                        completeMessage.push('Error!');
                }

            console.log(completeMessage);
            res.write('<html>');
            res.write('<head><title>Parsing Requests</title></head>');
            res.write(`<body><p>${completeMessage}</p><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="submit"></form></body>`);
            res.write('</html>');
            return res.end();
    
        });

        



    }

    if(url == '/message' && method === "POST"){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk)
        });

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt',message);
        })

        return res.end();


    }
})

server.listen(2500);
