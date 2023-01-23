//lib/path.js
//the path module provides utilites for working file and directory paths it can be accessed using

const path = require('path');

console.log(path.dirname("C:\DevOps\nodejs\nodejs-learning\path-module\path.js"));

console.log(path.extname("C:\DevOps\nodejs\nodejs-learning\path-module\path.js"));

console.log(path.basename("C:\DevOps\nodejs\nodejs-learning\path-module\path.js"));

console.log(path.parse("C:\DevOps\nodejs\nodejs-learning\path-module\path.js"));

const mypath = path.parse("C:\DevOps\nodejs\nodejs-learning\path-module\path.js");
console.log(mypath.root);