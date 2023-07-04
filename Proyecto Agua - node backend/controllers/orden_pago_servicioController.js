const orden_pago_servicioModel = require("../models/orden_pago_servicioModel");

const crearOrden_pago_servicio = async (req, res, next) => {
  try {
    const orden_pago_servicio = req.body;
    //console.log("orden_pago_servicio", orden_pago_servicio);
    const nuevaOrden_pago_servicio =
      await orden_pago_servicioModel.crearOrden_pago_servicio(
        orden_pago_servicio
      );
    res.json(nuevaOrden_pago_servicio);
  } catch (error) {
    next(error);
  }
};

const obtenerOrdenes_pago_servicio = async (req, res, next) => {
  try {
    const ordenes_pago_servicio =
      await orden_pago_servicioModel.obtenerOrdenes_pago_servicio();
    res.json(ordenes_pago_servicio);
  } catch (error) {
    next(error);
  }
};

const obtenerOrden_pago_servicioPorId = async (req, res, next) => {
  try {
    const { orden_id } = req.params;
    const { servicio_id } = req.params;
    const orden_pago_servicio =
      await orden_pago_servicioModel.obtenerOrden_pago_servicioPorId(
        orden_id,
        servicio_id
      );
    res.json(orden_pago_servicio);
  } catch (error) {
    next(error);
  }
};

const obtenerOrdenes_pago_servicioPorOrden = async (req, res, next) => {
  try {
    const { orden_id } = req.params;
    const ordenes_pago_servicio =
      await orden_pago_servicioModel.obtenerOrdenes_pago_servicioPorOrden(
        orden_id
      );
    res.json(ordenes_pago_servicio);
  } catch (error) {
    next(error);
  }
};

const actualizarOrden_pago_servicio = async (req, res, next) => {
  try {
    const { orden_id } = req.params;
    const { servicio_id } = req.params;
    const orden_pago_servicio = req.body;
    const orden_pago_servicioActualizado =
      await orden_pago_servicioModel.actualizarOrden_pago_servicio(
        orden_id,
        servicio_id,
        orden_pago_servicio
      );
    res.json(orden_pago_servicioActualizado);
  } catch (error) {
    next(error);
  }
};

const eliminarOrden_pago_servicio = async (req, res, next) => {
  try {
    const { orden_id } = req.params;
    const { servicio_id } = req.params;
    const orden_pago_servicio =
      await orden_pago_servicioModel.eliminarOrden_pago_servicio(
        orden_id,
        servicio_id
      );
    res.json(orden_pago_servicio);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearOrden_pago_servicio,
  obtenerOrdenes_pago_servicio,
  obtenerOrden_pago_servicioPorId,
  obtenerOrdenes_pago_servicioPorOrden,
  actualizarOrden_pago_servicio,
  eliminarOrden_pago_servicio,
};
