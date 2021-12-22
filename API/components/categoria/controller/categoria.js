'use-strict';
const mongoose = require("mongoose");
const Categoria = require('../model/categoria');

// exports.obtenerCategoria = async (req, res, next) => {
//    res.json({ 'Mensaje': 'Get Categoria esta bien' });
// }

exports.obtenerCategoria = async (req, res, next) => {
   try {
      const newCategoria = await Categoria.find({});
      res.json(newCategoria);
   } catch (error) {
      console.log(error);
      next();
   }
}

exports.crearCategoria = async (req, res, next) => {
   let newCategoria = new Categoria(req.body);
   try {
      await newCategoria.save();
      res.json({ mensaje: 'La categoria se agregó conrrectamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}