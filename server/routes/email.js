const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(process.env.GMAIL);

  // setup e-mail data with unicode symbols
  const mailOptions = {
      from: 'Entable', // sender address
      to: 'bannersitetest@gmail.com', // list of receivers
      replyTo: req.body.email,
      subject: 'Subscriber', // Subject line
      text: 'Subscriber', // plaintext body
      html: '<b>Subscriber</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
  res.end();
});

module.exports = router;
