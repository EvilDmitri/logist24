'use strict';

var _ = require('lodash');
var VerifyEmail = require('./mail.model');
/*
 Here we are configuring our SMTP Server details.
 STMP is mail server which is responsible for sending and recieving email.
 */
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "Mailgun",
  auth: {
    user: "postmaster@sandboxcab6a36ad9984b8d82bc9bfd891c4945.mailgun.org",
    pass: "bf7dd06b9c2f005a621492a9b421a661"
  }
});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/



// Send the email
exports.send = function(req, res) {


  var recipient = req.query.to;
  //var recipient = 'dmitribrach@gmail.com';


  rand=Math.floor((Math.random() * 1000000) + 54);
  VerifyEmail.create({'user': req.query.user, 'id': rand, 'email': recipient}, function(err, rand) {
    if (err) return handleError(err);
    console.log('saved!');
  });

  host=req.get('host');
  link="http://"+req.get('host')+"/verify?id="+rand;
  mailOptions={
    from: 'Logistik24 ✔ <realpyth@gmail.com>', // sender address
    to : recipient,
    subject : "Please confirm your Email account",
    html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
  };
  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });

};



// Verify the link
exports.verify = function(req, res) {

  if((req.protocol+"://"+req.get('host'))==("http://"+host))
  {

    VerifyEmail.findOne({'id': req.query.id}, function (err, email) {
      console.log(email);
      console.log("Domain is matched. Information is from Authentic email");
      if(req.query.id==rand)
      {
        console.log("email is verified");
        res.end("<h1>Email "+mailOptions.to+" is been Successfully verified" +
          "<br> Now you can use Logistik24");
        VerifyEmail.remove({'id': req.query.id}, function (err, data) {
          console.log('email removed');
        })
      }
      else
      {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
      }


    });

  }
  else
  {
    res.end("<h1>Request is from unknown source");
  }

};
