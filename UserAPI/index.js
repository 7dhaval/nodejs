const fs = require('fs');
const http = require('http');
const { type } = require('os');

const server =  http.createServer((req, res) => {


    const data = fs.readFileSync("userapi.json", "utf-8");  ////you can give path to another json file to get the data `$__dirname}`/USERAPI/Userapi.json`
    const objdata = JSON.parse(data);    
    // console.log(data); //to get data on web browser









        // console.log(req.url); ////this is console for the url like if you write something in url it will ne console
        if(req.url == "/"){
        res.end('Hello From the other side');
        } else if (req.url == "/about"){
            res.end("Hello from about us page");
        } else if (req.url == "/userapi"){

            //passed data in eles if but you can pass in variable and call it
            // fs.readFile("userapi.json", "utf-8" ,(err, data) => {  ////you can give path to another json file to get the data `$__dirname}`/USERAPI/Userapi.json`
                // console.log(data); //to get data on web browser 
                //to get specific data 
                // const objdata = JSON.parse(data);
                res.writeHead(200, { "content-type": "application/json"}); //this will tell browser header is 200 and we are dealing with json data
                res.end(objdata[0].username);
                // res.end(data); //to get all data on web server
            // });
            // res.end("Hello from USER API SIDE");
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