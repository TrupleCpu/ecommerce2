const express = require('express');
const router = express.Router();
const db = require('../controllers/database');
router.post('/checker', (req,res) => {
    const email = req.body.email;
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, result) => {
        if(error){
               console.error(error);
         return res.status(500).json({message: error});
        }  
        
        if(result.length > 0){
            console.log(email)
            res.status(200).json({message: true, result});
        } else (
            res.status(200).json({message: false, email})
        )
    })
})

module.exports = router;
