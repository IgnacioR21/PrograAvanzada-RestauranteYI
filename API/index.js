const express = require('express');
const app = express();
const port = process.env.port || 4000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restaurante');
app.use(express.urlencoded({ extended: true }));

//Rutas Producto
app.use('/api/producto', require('./routes/producto.js'));
//Rutas Categoria
app.use('/api/categoria', require('./routes/categoria.js'));
//Rutas Carrito
app.use('/api/carrito', require('./routes/carrito.js'));
//Rutas Usuario
app.use('/api/usuario', require('./routes/usuario.js'));
//Ruta Promocion
app.use('/api/promocion', require('./routes/promocion.js'));

app.listen(port, () => {
   console.log("Servidor escuchando a http://localhost:" + port);
});