const http = require('http');
const url = require('url');

function handler(req, res) {


    const parsedUrl = url.parse(req.url,true);
    //console.log(parsedUrl);

    if(parsedUrl.pathname === '/') {
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write('Hello I am web server!');
        return res.end();
    } else if (parsedUrl.pathname === '/time') {
        res.writeHead(200,{'Content-type':'text/plain'});
        res.write(new Date().toString());
        return res.end();
    } else {
        res.writeHead(400, {'Content-type':'text/plain'});
        return res.end();
    }
}

const server = http.createServer(handler);

server.listen(3000);