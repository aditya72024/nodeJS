const fs = require('fs');

const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;
    if(url == "/"){
        const completeMessage = []
        return fs.readFile("message.txt","utf8",(err,data)=>{
            if(!err){
                completeMessage.push(data);
            }else{
                completeMessage.push("Error!");
            }

            res.write('<html>');
            res.write('<head><title>Form Page</title></head>');
            res.write(`<body><p>${completeMessage}</p><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form>`)
            res.write('</html>');
            return res.end();

        });



    }

        if(url == '/message' && method == "POST"){
            const body = [];
            req.on('data', (chunk)=>{
                body.push(chunk);
            });

           return req.on('end', ()=>{
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split("=")[1];
                fs.writeFile('message.txt',message, (err) => {
                    res.statusCode = 302;
                    res.setHeader('location','/');
                    return res.end();
                })

            })
        }


        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write(`<body>Hi all to nodeJS</body>`);
        res.write('</html>');
        return res.end();
            
        }


        module.exports = requestHandler;

    




   
