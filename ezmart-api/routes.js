const routes = require('express').Router()

// Asignar Rutas
routes.get('/', function(req, res){
    res.send('Que pa mi fanes de EZMART BUY <img src="https://cdn.frankerfacez.com/emoticon/185890/4">')
});

module.exports = routes;