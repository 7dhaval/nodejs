//required moudle to add data on another file 
const fs = require('fs');

//cretead one objet
const  biodata = {
    name : "dhaval",
    age : "21",
    channel : "Shroud",
}

//converting and saving data in json file as json format
const jsonData =  JSON.stringify(biodata);
fs.writeFile('json1.json', jsonData, (err) =>{
        // console.log("done");
});


//reading json file and converting json data in to objecct
fs.readFile("json1.json","utf-8", (err,data) => {
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})