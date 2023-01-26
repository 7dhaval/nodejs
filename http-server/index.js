//the http.createServer() method includes request and responce paramter which is supplied by node.js

//the request object can be used to get information about the current HTTP request 
//eg: url,request header and data

//the responce object can be used a responce for a current HTTP request 

//if the reponce from the HTTP server is suppossed to be Displayed as HTML
//you should include and HTTP header with the correct content type

const http = require('http');
const { type } = require('os');

const server =  http.createServer((req, res) => {
        // console.log(req.url); ////this is console for the url like if you write something in url it will ne console
        if(req.url == "/"){
        res.end('Hello From the other side');
        } else if (req.url == "/about"){
            res.end("Hello from about us page");
        }
        //you can add more url same way else if
        else {
            res.writeHead(404, {"Content-type" : "text/html"}); //its faking its 200 responce and 404
            res.end("<h1>404 error pages. page does not exist</h1>")
        }

});


server.listen(8000 ,"127.0.0.1", () => {
    console.log("listening on the port no 8000")
});



//HTTP responce status codes indicate whether a specific HTTP request has been successfully completed
//100-199 >> informational Responce 
//200-299 >> Successful responce
//300-399 >> Redirects
//400-400 >> Client Errors
//500-599 >> server errors