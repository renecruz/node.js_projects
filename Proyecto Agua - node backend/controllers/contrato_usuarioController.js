const contrato_usuarioModel = require("../models/contrato_usuarioModel");

const crearContrato_usuario = async (req, res, next) => {
  try {
    const { contrato_id, usuario_id, es_adherido } = req.body;    
    const nuevoContrato_usuario = await contrato_usuarioModel.crearContrato_usuario(contrato_id, usuario_id, es_adherido);
    res.json(nuevoContrato_usuario);
  } catch (error) {
    next(error);
  }
};

const obtenerContratos_usuarios = async (req, res, next) => {
  try {
    const contratos_usuarios = await contrato_usuarioModel.obtenerContratos_usuarios();
    res.json(contratos_usuarios);
  } catch (error) {
    next(error);
  }
};

const obtenerContrato_usuarioPorId = async (req, res, next) => { 
  try {
    const { contrato_id } = req.params;
    const { usuario_id } = req.params;    
    const contrato_usuario = await contrato_usuarioModel.obtenerContrato_usuarioPorId(contrato_id, usuario_id);
    res.json(contrato_usuario);
  } catch (error) {
    next(error);
  }
}

const actualizarContrato_usuario = async(req, res, next) => { 
  try {
    const { contrato_id } = req.params;
    const { usuario_id } = req.params;
    const { es_adherido } = req.body;
    const contrato_usuarioActualizado = await contrato_usuarioModel.actualizarContrato_usuario(contrato_id, usuario_id, es_adherido);
    res.json(contrato_usuarioActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarContrato_usuario = async (req, res, next) => { 
  try {
    const { contrato_id } = req.params;
    const { usuario_id } = req.params;
    const contrato_usuario = await contrato_usuarioModel.eliminarContrato_usuario(contrato_id, usuario_id);
    res.json(contrato_usuario);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearContrato_usuario,
  obtenerContratos_usuarios,
  obtenerContrato_usuarioPorId,
  actualizarContrato_usuario,
  eliminarContrato_usuario
};
