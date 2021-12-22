'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre_producto: {
        type: String,
        trim: true,
    },
    descripcion_producto: { 
        type: String,
        trim: true 
    },
    categoria_producto: {
        type: String,
        trim: true,
    },
    precio_producto: {
        type: Number,
        trim: true 
    },
    imagen_producto: {
        type: String,
        trim: true 
    }
});

module.exports = mongoose.model('Producto', productoSchema);