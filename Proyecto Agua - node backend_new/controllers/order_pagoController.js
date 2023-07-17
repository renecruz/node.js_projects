const orden_pagoModel = require("../models/orden_pagoModel");

const crearOrden_pago = async (req, res, next) => {
  try {
    const orden_pago = req.body;
    const nuevaOrder_pago = await orden_pagoModel.crearOrden_pago(orden_pago);
    res.json(nuevaOrder_pago);
  } catch (error) {
    next(error);
  }
};

const obtenerOrdenes_pago = async (req, res, next) => {
  try {
    const orden_pago = await orden_pagoModel.obtenerOrdenes_pago();
    res.json(orden_pago);
  } catch (error) {
    next(error);
  }
};

const obtenerOrden_pagoPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orden_pago = await orden_pagoModel.obtenerOrden_pagoPorId(id);
    res.json(orden_pago);
  } catch (error) {
    next(error);
  }
};

const obtenerOrdenes_pagoPorContrato = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ordenes_pago = await orden_pagoModel.obtenerOrdenes_pagoPorContrato(
      id
    );
    res.json(ordenes_pago);
  } catch (error) {
    next(error);
  }
};

const actualizarOrden_pago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orden_pagoActualizada = await orden_pagoModel.actualizarOrden_pago(
      id,
      req.body
    );
    res.json(orden_pagoActualizada);
  } catch (error) {
    next(error);
  }
};

const eliminarOrden_pago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orden_pago = await orden_pagoModel.eliminarOrden_pago(id);
    res.json(orden_pago);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearOrden_pago,
  obtenerOrdenes_pago,
  obtenerOrden_pagoPorId,
  obtenerOrdenes_pagoPorContrato,
  actualizarOrden_pago,
  eliminarOrden_pago,
};
