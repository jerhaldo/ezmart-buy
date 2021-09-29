const router = require('express').Router()
const conn = require('./config/dbConnection')
const multer = require('multer');
var nombre_arch = '';
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './public/data/uploads/');
    },
    filename: function (req,file,cb) {
        this.nombre_arch = (new Date().getTime()).toString() + "_" + file.originalname
        cb(null, this.nombre_arch);
    }
})
const upload = multer({storage: storage});

router.post('/uploadimg/:id', upload.single('img'), (req, res, next) => {
    const {id} = req.params
    console.log(req.file.filename)
    console.log(this.nombre_arch)
    let sql = `insert into multimedia_producto(id_multi, id_prod, desc_multi, arch_multi) values ('','${id}','descripcion','${req.file.filename}')`    // UPDATEA EL PRODUCTO CON ESE ID
    conn.query(sql,(err, rows, fields)=>{
            if(err) throw err;
        else{
            res.json("Succes");
        }
    })    
    

});


module.exports = router;