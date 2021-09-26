const router = require('express').Router()
const conn = require('./config/dbConnection')
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
//var multer = require('multer')
//const multer = require('multer')

// Asignar Rutas
//********* RUTAS DE TESTEO A CONEXION CON BD *************//
router.get('/', (req, res)=>{
    let sql = 'select * from producto'    // MUESTRA TODAS Los productos
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'select * from producto where id_prod=?'    // MUESTRA EL PRODUCTO CON ESE ID
    conn.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'UPDATE producto SET estado = 0 where id_prod=?'    // Se cambia el estado del PRODUCTO CON ESE ID
    conn.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.post('/', upload.single('uploaded_file') ,(req, res)=>{//añade un producto
    const {id_tienda, id_categ,nombre_prod, desc_prod, 
        precio_prod_act, precio_prod_ant, stock_prod, 
        cant_ventas, oferta, estado} = req.body
    
    let sql = `insert into producto(id_prod, id_tienda, id_categ, nombre_prod, desc_prod, precio_prod_act, precio_prod_ant, stock_prod, cant_ventas, oferta, estado) values (,'${id_tienda}',${id_categ},'${nombre_prod}', ${desc_prod}, 
    ${precio_prod_act}', ${precio_prod_ant}', ${stock_prod}, ${cant_ventas}, ${oferta}, ${estado})`    // UPDATEA EL PRODUCTO CON ESE ID
    
    conn.query(sql,[id_tienda, id_categ,nombre_prod, desc_prod, 
        precio_prod_act, precio_prod_ant, stock_prod, 
        cant_ventas, oferta, estado], (err, rows, fields)=>{
        
            if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.put('/offer/:id', (req, res)=>{//añade oferta
    const {id} = req.params
    const {precio_prod_act} = req.body
    let sql = `UPDATE producto SET precio_prod_act = '${precio_prod_act}', oferta = 1 where id_prod='${id}'`
    conn.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.put('/', (req, res)=>{//Update
    const {id_prod,id_tienda, id_categ,nombre_prod, desc_prod, 
        precio_prod_act, precio_prod_ant, stock_prod, 
        cant_ventas} = req.body
    let sql = `UPDATE producto SET id_tienda = '${id_tienda}',
    id_categ = '${id_categ}',
    nombre_prod = '${nombre_prod}',
    desc_prod = '${desc_prod}',
    precio_prod_act = '${precio_prod_act}',
    precio_prod_ant = '${precio_prod_ant}',
    stock_prod = '${stock_prod}',
    cant_ventas = '${cant_ventas}'
    where id_prod = '${id_prod}'
    ` 
    conn.query(sql,[id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})




module.exports = router;