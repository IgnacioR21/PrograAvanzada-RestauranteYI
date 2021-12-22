const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
   nombre_usuario: {
      type: String,
      trim: true,
   },
   apellidos_usuario: {
      type: String,
      trim: true
   },
   telefono_usuario: {
      type: Number,
      trim: true,
   },
   correo_usuario: {
      type: String,
      trim: true
   },
   edad_usuario: {
      type: Number,
      trim: true
   },
   contraseña_usuario: {
      type: String,
      trim: true
   },
   direccion_usuario: {
      type: String,
      trim: true
   }
});

module.exports = mongoose.model('Usuario', usuariosSchema);