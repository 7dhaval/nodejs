//the parameter in a function call are the function's arguments
const add = (a,b) => {
     return a + b;
}

//creating exports module for index.js file to call a funtction add 
//exports name should be right to idicate what should be called
module.exports = add;

//>>for multiple exports 

const sub = (a,b) => {
    return a - b;
}

const mult = (a,b) => {
    return a * b;
}

//// module exports without disttructuring
// module.exports.sub = sub;
// module.exports.mult = mult;

////object distructuring in module
module.exports = { sub,mult };