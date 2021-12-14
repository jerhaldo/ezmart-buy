const router = require('express').Router()
const db = require('./config/dbConnection')

router.get('/tienda/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'select id_orden,rut_usuario,id_tienda,fecha_compra,total,estado,nombre_courier from orden_compra as oc, courier as c where oc.id_courier = c.id_courier and id_tienda = ? order by oc.fecha_compra desc;'
    db.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'select prod.id_prod as id,nombre_prod,nombre_categ,desc_prod,precio_prod_act,precio_prod_ant,stock_prod,cant_ventas,oferta,estado,nombre_multi, arch_multi\
    from producto_orden as por,producto as prod, multimedia_producto as mp, categoria as cat\
    where por.id_prod = prod.id_prod and mp.id_prod = prod.id_prod and cat.id_categ = prod.id_categ and id_orden = ?'
    db.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

router.post('/edit/:id', function(req, res, next) {
    const id = req.params.id;
    var updateData = req.body;
    var sql = `UPDATE orden_compra SET ? WHERE id_orden = ?`;
    db.query(sql, [updateData, id], function(err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/:id');
});

module.exports = router;