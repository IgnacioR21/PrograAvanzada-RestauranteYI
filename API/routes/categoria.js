const express = require('express');
const { Router } = require('express');
const router = Router();
const categoriaController = require('../components/categoria/controller/categoria.js');

router.get('/', categoriaController.obtenerCategoria);

router.post('/', categoriaController.crearCategoria);

module.exports = router;