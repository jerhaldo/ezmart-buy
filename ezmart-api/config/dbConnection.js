const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'i7317491_ci1',
    multipleStatements: true
});

connection.connect((err)=>{
    if(err)
    {
        console.log('Ha ocurrido un error en la conexión: '+ err);
    }
})

module.exports = connection;