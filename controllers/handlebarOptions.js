const path = require('path')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const handleBarOptions = {
    viewEngine: {
        extname: '.handlebars',
        partialsDir: path.resolve('./Mail'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./Mail'),
    extname: '.handlebars',
}
module.exports = handleBarOptions;