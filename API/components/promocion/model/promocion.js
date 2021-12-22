const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const promocionesSchema = new Schema({
   categoria_promocion: {
      type: String,
      trim: true
   },
   productos_promocion: [{
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
   }]
});
module.exports = mongoose.model('Promocion', promocionesSchema);   