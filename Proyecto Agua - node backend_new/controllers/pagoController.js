const pagoModel = require("../models/pagoModel");

const crearPago = async (req, res, next) => {
  try {
    const pago = req.body;
    const nuevoPago = await pagoModel.crearPago(pago);
    res.json(nuevoPago);
  } catch (error) {
    next(error);
  }
};

const obtenerPagos = async (req, res, next) => {
  try {
    const pagos = await pagoModel.obtenerPagos();
    res.json(pagos);
  } catch (error) {
    next(error);
  }
};

const obtenerPagoPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pago = await pagoModel.obtenerPagoPorId(id);
    res.json(pago);
  } catch (error) {
    next(error);
  }
};

const obtenerPagosPorOrden = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pagos = await pagoModel.obtenerPagosPorOrden(id);
    res.json(pagos);
  } catch (error) {
    next(error);
  }
};

const actualizarPago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pagoActualizado = await pagoModel.actualizarPago(id, req.body);
    res.json(pagoActualizado);
  } catch (error) {
    next(error);
  }
};

const eliminarPago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pago = await pagoModel.eliminarPago(id);
    res.json(pago);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearPago,
  obtenerPagos,
  obtenerPagoPorId,
  obtenerPagosPorOrden,
  actualizarPago,
  eliminarPago,
};
