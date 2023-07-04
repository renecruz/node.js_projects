const express = require("express");
const router = express.Router();
const orden_pago_servicioController = require("../controllers/orden_pago_servicioController");

router.post("/", orden_pago_servicioController.crearOrden_pago_servicio);
router.get("/", orden_pago_servicioController.obtenerOrdenes_pago_servicio);
router.get(
  "/:orden_id/:servicio_id",
  orden_pago_servicioController.obtenerOrden_pago_servicioPorId
);
router.get(
  "/:orden_id",
  orden_pago_servicioController.obtenerOrdenes_pago_servicioPorOrden
);
router.put(
  "/:orden_id/:servicio_id",
  orden_pago_servicioController.actualizarOrden_pago_servicio
);
router.delete(
  "/:orden_id/:servicio_id",
  orden_pago_servicioController.eliminarOrden_pago_servicio
);

module.exports = router;
