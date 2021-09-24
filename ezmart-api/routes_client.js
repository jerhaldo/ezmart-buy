const router = require('express').Router()
const conn = require('./config/dbConnection')

// Asignar Rutas
//********* RUTAS DE TESTEO A CONEXION CON BD *************//
router.get('/', (req, res)=>{
    let sql = 'select * from producto'    // MUESTRA TODAS LAS COMUNAS
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

module.exports = router;