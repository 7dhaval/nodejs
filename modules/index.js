// import fs from "fs";
const fs = require('fs');

//create a new file 
//call this method again if file is  not present it will create a file if file is already present it will overwrite with new data
// fs.writeFileSync('read.txt', "Learning nodejs");


//append will add extra data on file
// fs.appendFileSync('');

const data = fs.readFileSync('read.txt');
console.log(data);

org_data =  data.toString();
console.log(org_data);
//nodejs incldues an additional data type called buffer
//(not available in browsers js)
//buffer is mainly used to store binary data
//while reading form file or reciving packets over the internet


//to rename the file 

fs.renameSync("read.txt", "readwrite.txt");
