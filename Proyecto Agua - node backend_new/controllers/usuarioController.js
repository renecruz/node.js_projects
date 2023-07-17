const usuarioModel = require("../models/usuarioModel");

const crearUsuario = async (req, res, next) => {
  try {
    //const { calle, colonia_id } = req.body;
    const nuevoUsuario = await usuarioModel.crearUsuario(req.body);
    res.json(nuevoUsuario);
  } catch (error) {
    next(error);
  }
};

const obtenerUsuarios = async (req, res, next) => {
  try {
    const usuarios = await usuarioModel.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

const obtenerUsuarioPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const usuario = await usuarioModel.obtenerUsuarioPorId(id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
}

const actualizarUsuario = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const usuarioActualizado = await usuarioModel.actualizarUsuario(id, req.body);
    res.json(usuarioActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarUsuario = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const usuario = await usuarioModel.eliminarUsuario(id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
