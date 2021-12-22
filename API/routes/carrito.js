const express = require('express');
const { Router } = require('express');
const router = Router();
const carritoController = require('../components/carrito/controller/carrito.js');

router.get('/', carritoController.obtenerCarrito);

router.post('/', carritoController.crearCarrito);

module.exports = router;