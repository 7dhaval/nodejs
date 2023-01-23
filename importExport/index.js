//>> for  single module
// const add = require('./oper');
// console.log(add(5,7));  //for single module call

//for multiple modules 
// const oper = require('./oper'); ////calling in one export
// console.log(oper.sub(10,9));
// console.log(oper.mult(7,7));


//>>>array distructuring 
const { sub,mult } = require('./oper');  ////calling every module in array
// console.log(add);
//calling multiple modules using add (in add we are storing variabes) add is module of way we are calling
console.log(sub(10,9));
console.log(mult(7,7));