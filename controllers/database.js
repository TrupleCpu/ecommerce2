const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'clothingstore'
})

db.connect((error) => {
    if(error){
        console.error(error)
    } else {
        console.log('connected to the database');
    }
})

module.exports = db;