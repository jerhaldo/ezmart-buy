const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: ''
});

connection.connect((err)=>{
    if(err)
    {
        console.log('Ha ocurrido un error: '+ err);
    }
})

module.exports = connection;