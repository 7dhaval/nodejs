//2nd way 
//Reading from a steam 
//Create a readable stream
//Handle stream Events ==> data , end and error

const fs = require('fs');
const  http = require('http');

const server = http.createServer();
//not straming way to do it 
// server.on('request', (req, res) => {
//    var fs = require('fs');
//    fs.readFile('input.txt', (err, data) => {
//      if (err) return console.error(err);
//      res.end(data.toString());
//    });
// });

//2nd way 
//Reading from a steam 
//Create a readable stream
//Handle stream Events ==> data , end and error
//streaming way to do it 
server.on("request", (req, res) =>{
    
    // const rsstream = fs.createReadStream("input.txt");
    // rsstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rsstream.on('end', () => {
    //     res.end();
    // });
    // rsstream.on('error', (err) => {
    //     console.log(err);
    //     res.end("file not found")
    // })


//3rd way using stream pipe
const rsstream = fs.createReadStream("input.txt");
rsstream.pipe(res);

});

server.listen(8000, "127.0.0.1");
console.log("server is open on 8000");