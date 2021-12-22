const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
    fecha_pedido: {
        type: Date,
        default: Date.now
    },
    id_usuario: {
        type: String,
        trim: true
    },
    nombre_usuario: {
        type: String,
        trim: true
    },
    carrito: [{
        nombre_productoC: {
            type: String,
            trim: true
        },
        descripcion_productoC: {
            type: String,
            trim: true
        },
        categoria_productoC: {
            type: String,
            trim: true
        },
        precio_productoC: {
            type: Number,
            trim: true
        },
        cantidadC: {
            type: Number,
            trim: true
        }
    }],
    precio_Final: {
        type: Number,
        trim: true
    }


});

module.exports = mongoose.model('Carrito', carritoSchema);