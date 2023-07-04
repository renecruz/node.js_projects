const servicioModel = require("../models/servicio_por_consumoModel");

const crearServicio = async (req, res, next) => {
  try {
    const servicio = req.body;
    const nuevoServicio = await servicioModel.crearServicio(servicio);
    res.json(nuevoServicio);
  } catch (error) {
    next(error);
  }
};

const obtenerServicios = async (req, res, next) => {
  try {
    const servicios = await servicioModel.obtenerServicios();
    res.json(servicios);
  } catch (error) {
    next(error);
  }
};

const obtenerServicioPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicio = await servicioModel.obtenerServicioPorId(id);
    res.json(servicio);
  } catch (error) {
    next(error);
  }
};

const actualizarServicio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicioActualizado = await servicioModel.actualizarServicio(
      id,
      req.body
    );
    res.json(servicioActualizado);
  } catch (error) {
    next(error);
  }
};

const eliminarServicio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicio = await servicioModel.eliminarServicio(id);
    res.json(servicio);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearServicio,
  obtenerServicios,
  obtenerServicioPorId,
  actualizarServicio,
  eliminarServicio,
};
