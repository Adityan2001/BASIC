// const http=require('http');

// const hostname='localhost';
// const port=3000;

// const server=http.createServer((req,res)=>{
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body></h1><Hello World></h1><body></html>');
// });

// server.listen(port,hostname,()=>{
//     console.log('Server is running at http://'+hostname+":"+ port);
// });


const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port =3000;



const server = http.createServer((req, res) =>{
        console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {
        var fileUrl;

        if (req.url == '/') {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exist) => {
                if (exist) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                } else {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Not Found</h1></body></html>');
                    return;
                }

            })
        }
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Request method not supported</h1><body></html>');
    }
});


server.listen(port, hostname, () => {
    console.log('server is running at http://' + hostname + ":" + port);
});