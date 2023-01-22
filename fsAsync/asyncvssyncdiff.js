

const fs = require('fs');

//in sync everyhting will display step by step
// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("after the data");

//in async the fast one will execute first
fs.readFile("read.txt","utf-8",(err,data) => {
    console.log(data);
});
console.log("after the data");