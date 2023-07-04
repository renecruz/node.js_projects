const servicio_recurrenteModel = require("../models/servicio_recurrenteModel");

const crearServicio = async (req, res, next) => {
  try {
    const servicio = req.body;
    const nuevoServicio = await servicio_recurrenteModel.crearServicio(
      servicio
    );
    res.json(nuevoServicio);
  } catch (error) {
    next(error);
  }
};

const obtenerServicios = async (req, res, next) => {
  try {
    const servicios = await servicio_recurrenteModel.obtenerServicios();
    res.json(servicios);
  } catch (error) {
    next(error);
  }
};

const obtenerServicioPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicio = await servicio_recurrenteModel.obtenerServicioPorId(id);
    res.json(servicio);
  } catch (error) {
    next(error);
  }
};

const actualizarServicio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicioActualizado =
      await servicio_recurrenteModel.actualizarServicio(id, req.body);
    res.json(servicioActualizado);
  } catch (error) {
    next(error);
  }
};

const eliminarServicio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const servicio = await servicio_recurrenteModel.eliminarServicio(id);
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
