'use-strict';
const mongoose = require("mongoose");
const Usuario = require('../model/usuario');

// exports.obtenerUsuario = async (req, res, next) => {
//    res.json({'Mensaje':'Get Usuario esta bien'});
// }

exports.obtenerUsuario = async (req, res, next) => {
   try {
      const newUsuario = await Usuario.find({});
      res.json(newUsuario);
   } catch (error) {
      console.log(error);
      next();
   }
}

exports.crearUsuario = async (req, res, next) => {
   let newUsuario = new Usuario(req.body);
   try {
      await newUsuario.save();
      res.json({ mensaje: 'El usuario se agregó conrrectamente' });
   } catch (error) {
      console.log(error);
      next();
   }
}