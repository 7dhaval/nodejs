const biodata = {
    name : "dhaval",
    age : 21,
    channel : "dhavalsnh",
};

console.log(biodata.channel);

//to create a object in json 
const jsondata = JSON.stringify(biodata);
console.log(jsondata); ////this will give json format


//create json to object 
const objdata = JSON.parse(jsondata);
console.log(objdata);  ////this will give object format