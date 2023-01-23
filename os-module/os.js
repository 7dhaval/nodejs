//lib/os.js
//the os module provides operating system related utility methods and properties it can be accessed using 
//const os = require('os');
const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const free = os.freemem();
console.log(`${free/1024/1024/1024}`);

const total = os.totalmem();
console.log(`${total / 1024 / 1024 / 1024}`);