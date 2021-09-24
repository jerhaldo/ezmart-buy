const router = require('express').Router()
const conn = require('./config/dbConnection')

// Asignar Rutas
//********* RUTAS DE TESTEO A CONEXION CON BD *************//
router.get('/', (req, res)=>{
    let sql = 'select * from comuna'    // MUESTRA TODAS LAS COMUNAS
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.get('/:parametro', (req, res)=>{                     //LA VARIABLE PARAMETRO PUEDE RECIBIR CUALQUIER NOMBRE
    const {parametro} = req.params
    let sql = 'select * from comuna where id_comuna = ?'    // MUESTRA LOS DATOS EN BASE AL ID PASADO POR PARAMETRO
    conn.query(sql, [parametro], (err, rows, fields)=>{     //ID_COMUNA: 7,8,9,10,11,12
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.post('/', (req, res)=>{                              // INSERT 
    const{nombre_courier} = req.body

    let sql = `insert into courier(nombre_courier) values('${nombre_courier}')` //SE RECIBE DESDE UN JSON
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'courier agregado con exito'})
        }
    })
})

//**********************************************************/

module.exports = router;