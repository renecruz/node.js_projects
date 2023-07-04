const contratoModel = require("../models/contratoModel");

const crearContrato = async (req, res, next) => {
  try {
    const { fecha, tipo_tarifa, activo, toma_hidraulica_id } = req.body;    
    const nuevoContrato = await contratoModel.crearContrato(new Date(fecha), tipo_tarifa, activo, toma_hidraulica_id);  // fecha debe ser tipo Date y llega String
    res.json(nuevoContrato);
  } catch (error) {
    next(error);
  }
};

const obtenerContratos = async (req, res, next) => {
  try {
    const contratos = await contratoModel.obtenerContratos();
    res.json(contratos);
  } catch (error) {
    next(error);
  }
};

const obtenerContratoPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const contrato = await contratoModel.obtenerContratoPorId(id);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

const obtenerContratoPorToma_hidraulica = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const contrato = await contratoModel.obtenerContratoPorToma_hidraulica(id);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

const actualizarContrato = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const { fecha, tipo_tarifa, activo, toma_hidraulica_id } = req.body;    
    const contratoActualizado = await contratoModel.actualizarContrato(id, new Date(fecha), tipo_tarifa, activo, toma_hidraulica_id);  // fecha debe ser tipo Date y llega String
    res.json(contratoActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarContrato = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const contrato = await contratoModel.eliminarContrato(id);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearContrato,
  obtenerContratos,
  obtenerContratoPorId,
  obtenerContratoPorToma_hidraulica,
  actualizarContrato,
  eliminarContrato
};
