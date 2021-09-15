require('./config/dbConnection');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//config
app.set('port', port)

//routes
app.use('/api', require('./routes'))

//Iniciar Express
app.listen(app.get('port'), (error)=> {
    if(error)
    {
        console.log("Error al Iniciar Servidor:" + error)
    }
    else
    {
        console.log("Servidor iniciado en puerto:" + port)
    }
})