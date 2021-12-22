const express = require('express');
const { Router } = require('express');
const router = Router();
const usuarioController =  require('../components/usuario/controller/usuario.js');

router.get('/', usuarioController.obtenerUsuario);

router.post('/', usuarioController.crearUsuario);

module.exports = router;