'use-strict';
const mongoose = require("mongoose");
const Promocion = require('../model/promocion');
exports.obtenerPromocion = async (req, res, next) => {
   try {
      const newPromocion = await Promocion.find({});
      res.json(newPromocion);
   } catch (error) {
      console.log(error);
      next();
   }
}
exports.crearPromocion = async (req, res, next) => {
   let newPromocion = new Promocion(req.body);
   try {
      await newPromocion.save();
      res.json({ mensaje: 'El producto se agregó conrrectamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}