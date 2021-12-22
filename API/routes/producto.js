const express = require('express');
const { Router } = require('express');
const router = Router();
const productoController = require('../components/producto/controller/producto.js');

router.get('/', productoController.obtenerProducto);

router.post('/', productoController.crearProducto);

module.exports = router;