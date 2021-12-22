'use-strict';
const mongoose = require("mongoose");
const Carrito = require('../model/carrito');

exports.obtenerCarrito = async (req, res, next) => {
   try {
      const newCarrito = await Carrito.find({});
      res.json(newCarrito);
   } catch (error) {
      console.log(error);
      next();
   }
}

exports.crearCarrito = async (req, res, next) => {
   let newCarrito = new Carrito(req.body);
   try {
      await newCarrito.save();
      res.json({ mensaje: 'El carrito se agregó conrrectamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}