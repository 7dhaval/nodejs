//requiring nodemailer for  SMTP Server
const nodemailer = require("nodemailer");


const sendMail = async(req, res) => {
    //copying from nodemailer
    let testAccount = await nodemailer.createTestAccount();

    //connect SMTP server with it 
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'troy.pfeffer42@ethereal.email',
            pass: 'yuDuPdSCntUXdYedJe'
        },
      });
       

      //using node,mailer and ethereal.email
      //logic of sending email
      let info = await transporter.sendMail({
        from: '"Dhaval sinh 👻" <dhavals@gmail.com>', // sender address
        to: "dhavalsinhsonasaniya7318@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      res.json(info);
    
    
    
    res.send("Welcome ! This is mail server. :)");
}; 

module.exports = sendMail;