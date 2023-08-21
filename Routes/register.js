const express = require('express');
const router = express.Router();
const db = require('../controllers/database');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const transporter = require('../controllers/transporter');
const handleBarOptions = require('../controllers/handlebarOptions');
const hbs = require('nodemailer-express-handlebars');

function generateCode() {
   const codeLength = 6;
   const codes = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let code = '';
   for(let i = 0; i < codeLength; i++){
      const codeRandomIndex = Math.floor(Math.random()* codes.length);
      code += codes.charAt(codeRandomIndex);
   }
   return code;
}

router.post('/register',(req,res) => {
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const verificationCode = generateCode();

   transporter.use('compile', hbs(handleBarOptions));
    
   const mailOptions = {
      from: 'kleinclothingshop@gmail.com',
      to: email,
      subject: 'VERIFICATION CODE',
      template: 'email',
      context: {
         title: `K L E I N`,
         username: username,
         text: `Please verify your email ${email} by copying the code shown below and sign up for latest news and exclusive offers.`,
         code: verificationCode
      }
   }
   transporter.sendMail(mailOptions, (error, info) => {
      if(error){
         console.error(error)
         return res.status(500).json({message: 'ERROR IN VERIFYING '})
      } 
   bcrypt.hash(password, saltRounds, (error, hash) => {
      db.query('INSERT INTO users  (username, email, password, verificationCode) VALUES (?,?,?,?)', [username, email, hash, verificationCode ], (error,result) => {
        if(error){
           console.error(error)
           res.status(500).json({message: error})
        } else {
           res.status(200).json({message: 'REGISTER COMPLETE!', result, info})
        }
      })
   })
})
})

module.exports = router;