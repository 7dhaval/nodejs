//requiring express moudles
const express = require('express');
const app = express();

//requiring sendMail module created in sendmail.js file
const sendMail = require("./controllers/sendMail");

//calling express moudle and calling it back 
app.get("/" , (req, res) => {
    res.send("I am a server");
});


//send email function and route
app.get("/sendmail", sendMail);


//creating function to listen port 
const start = async() => {
    try{
        app.listen(5000, () => {
            console.log(`Live on Port Number 5000`);
        });
    } catch (error) {}
}
//calling the start function to start server
start();