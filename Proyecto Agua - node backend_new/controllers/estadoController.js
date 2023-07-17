const estadoModel = require("../models/estadoModel");

const crearEstado = async (req, res, next) => {
  try {
    const { estado, abreviatura, latitud, longitud } = req.body;
    const nuevoEstado = await estadoModel.crearEstado(
      estado,
      abreviatura,
      latitud,
      longitud
    );
    res.json(nuevoEstado);
  } catch (error) {
    next(error);
  }
};

const obtenerEstados = async (req, res, next) => {
  try {
    const estados = await estadoModel.obtenerEstados();
    res.json(estados);
  } catch (error) {
    next(error);
  }
};

const obtenerEstadoPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const estado = await estadoModel.obtenerEstadoPorId(id);
    res.json(estado);
  } catch (error) {
    next(error);
  }
}

const actualizarEstado = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const estadoActualizado = await estadoModel.actualizarEstado(id, req.body);
    res.json(estadoActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarEstado = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const estado = await estadoModel.eliminarEstado(id);
    res.json(estado);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearEstado,
  obtenerEstados,
  obtenerEstadoPorId,
  actualizarEstado,
  eliminarEstado
};
