const express = require('express');
const router = express.Router();
const db = require('../controllers/database');


router.post('/verifyCode', (req,res) => {
    const email = req.body.email;
    const verificationCode = req.body.verificationCode;
   
    db.query('UPDATE users  SET verified = true  WHERE email = ? AND verificationCode = ?', [email, verificationCode], (error, result) => {
        if(error){
            console.error(error);
           res.status(500).json({message: error})
        } else if (result.affectedRows === 0) {

            res.status(200).json({message: 'Verification failed'})
        } else {
            res.status(200).json({message: 'ACCOUNT VERIFIED!!'})
        }
    })
 
})

module.exports = router;
