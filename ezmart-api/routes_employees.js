const router = require('express').Router()
const conn = require('./config/dbConnection')

// Asignar Rutas

/*      LISTAR EMPLEADOS */
router.get('/:id_tienda', (req, res)=>{
    const {id_tienda} = req.params
    let sql = `SELECT u.rut_usuario, u.nombre_usuario, u.apellido_pat, u.apellido_mat, t.fecha_ingreso, u.telefono, u.email 
                FROM usuario AS u JOIN trabajador_tienda AS t ON u.rut_usuario = t.rut_usuario WHERE id_tienda = ${id_tienda}`
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

/*      AGREGAR EMPLEADOS */
router.post('/add', (req, res)=>{
    const{id_tienda, rut_usuario} = req.body    //RECIBE PARAMETROS POR JSON
    
    const fecha_ingreso = new Date().toISOString().slice(0, 19).replace('T', ' ')   //FORMATO MYSQL (SE SUPONE)

    let sql = `INSERT INTO trabajador_tienda(id_tienda, rut_usuario, fecha_ingreso) VALUES('${id_tienda}', '${rut_usuario}', '${fecha_ingreso}');
                UPDATE usuario SET rol = 2 WHERE rut_usuario = ${rut_usuario}`
                //INSERT EN TRABAJADORES Y ACTUALIZAR EL ROL DEL USUARIO A TRABAJADOR (ROL = 2)
    conn.query(sql, (err, rows, fields)=>{
        if(err){
            console.log(err)
            res.status(500)
            res.send('Error en la creación del empleado')
        }
        else{
            res.status(201)
            res.send('Empleado agregado con exito.')
        }
    })
})

/*      ELIMINAR EMPLEADOS */
router.delete('/delete/:rut_usuario', (req, res)=>{
    const{rut_usuario} = req.params    //RECIBE PARAMETROS POR PARAMETRO

    let sql = `DELETE FROM trabajador_tienda WHERE rut_usuario = ${rut_usuario};
                UPDATE usuario SET rol = 0 WHERE rut_usuario = ${rut_usuario}`
                //DELETE DE TRABAJADORES Y ACTUALIZAR EL ROL DEL USUARIO A NORMAL (ROL = 0)
    conn.query(sql, (err, rows, fields)=>{
        if(err){
            console.log(err)
            res.status(500)
            res.send('Error en la eliminación del empleado')
        }
        else{
            res.status(201)
            res.send('Empleado despedido con exito.')
        }
    })
})

//**********************************************************/

module.exports = router;