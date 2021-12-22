'use-strict';
const mongoose = require("mongoose");
const Producto = require('../model/producto');

// exports.obtenerProducto = async (req, res, next) => {
//    res.json({'Mensaje':'Get Producto esta bien'});
// }

exports.obtenerProducto = async (req, res, next) => {
   try {
      const newProducto = await Producto.find({});
      res.json(newProducto);
   } catch (error) {
      console.log(error);
      next();
   }
}

exports.crearProducto = async (req, res, next) => {
   let newProducto = new Producto(req.body);
   try {
      await newProducto.save();
      res.json({ mensaje: 'El producto se agregó conrrectamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}

