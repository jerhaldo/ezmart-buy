require('./config/dbConnection');


const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express()

//admitir
app.use(express.json())


//config
app.set('port', port)

//routes
app.use('/api/dashboard', require('./routes_admin'))    //RUTAS PARA EL DASHBOARD
app.use('/api/', require('./routes_client'))            //RUTAS PARA LA TIENDA
app.use('/api/products', require('./routes_products'))            //RUTAS PARA LA productos
app.use('/api/category', require('./routes_category'))            //RUTAS PARA LA CATEGORIAS
app.use('/api/upload', require('./routes_upload'))            //RUTAS PARA LA CATEGORIAS
app.use('/api/employees', require('./routes_employees'))            //RUTAS PARA LOS EMPLEADOS
app.use(express.static('public/data/uploads'));  



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