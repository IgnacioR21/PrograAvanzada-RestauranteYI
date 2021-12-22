const express = require('express');
const { Router } = require('express');
const router = Router();
const promocionController = require('../components/promocion/controller/promocion.js');

router.get('/', promocionController.obtenerPromocion);

router.post('/', promocionController.crearPromocion);

module.exports = router;