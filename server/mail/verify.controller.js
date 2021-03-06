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

  var recipient = req.body.email;
  console.log(req.body);

  rand=Math.floor((Math.random() * 1000000) + 54);
  VerifyEmail.create({'user': req.body.user, 'id': rand, 'email': recipient}, function(err, rand) {
    if (err) return handleError(err);
    console.log('saved!');
  });

  //host='localhost:9000';
  host='logistik24.ee';

  link="http://www."+host+"/confirm/"+rand;
  mailOptions={
    from: 'Logistik24.ee ✔ <logistik24.ee@gmail.com>', // sender address
    to : recipient,
    subject : "Palun kinnitage oma e-posti",
    html : "Tere,<br> Palun kliki lingi, et kontrollida oma e-posti.<br><a href="+link+">Vajuta siia, et kontrollida</a>"
  };
  //console.log(mailOptions);

  transporter.sendMail(mailOptions, function(error, response){
    if(error){
      //console.log(error);
      res.end("error");
    }else{
      //console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });

};



// Verify the link
exports.verify = function(req, res) {

  //console.log(req.get('host'));

  //if((req.protocol+"://"+req.get('host'))==("http://"+host))
  //{

    VerifyEmail.findOne({'id': req.query.id}, function (err, email) {
      //console.log(email);
      //console.log("Domain is matched. Information is from Authentic email");
      if(req.query.id==rand)
      {
        //console.log("email is verified");
        //res.end("<h1> "+mailOptions.to+" is been Successfully verified" +
        //  "<br> Now you can use Logistik24");
        res.end("OK");
        VerifyEmail.remove({'id': req.query.id}, function (err, data) {
          //console.log('email removed');
        })
      }
      else
      {
        //console.log("email is not verified");
        res.end("ERROR");
      }


    });

  //}
  //else
  //{
  //  res.end("<h1>Request is from unknown source");
  //}

};
