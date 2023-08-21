const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kleinclothingshop@gmail.com',
        pass: 'lqdgccdzlgphozmp'
    }
})
module.exports = transporter;