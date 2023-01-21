const fs = require('fs');


//createing file using async feature
//we pass them a function as an argumemt - a callback - 
//that gets called when that task completes
//the callback has an argument that tells you whether the operation completed successfully
//now we need to say what to do when fs.writefile
//has completed (even if its nothing) and start 
//checking for errors
// fs.writeFile('read.txt', 'Today is Sunday', (err) => {
//     console.log("file is created");
//     console.log(err);  //to check if error is present or not
    
//     });


// fs.appendFile("read.txt", "plz code this for me", (err) =>{
 
//      console.log("task is completed");
// });

//to get data read from file in Async method

fs.readFile("read.txt", "utf-8", (err, data) =>{

    console.log(data);

});