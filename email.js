var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chaimaehassari1@gmail.com',
    pass: 'chaimae150hassari'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'chaimaehassari1@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});