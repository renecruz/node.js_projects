const express = require("express");
const router = express.Router();
const order_pagoController = require("../controllers/order_pagoController");

router.post("/", order_pagoController.crearOrden_pago);
router.get("/", order_pagoController.obtenerOrdenes_pago);
router.get("/:id", order_pagoController.obtenerOrden_pagoPorId);
router.get(
  "/contrato/:id",
  order_pagoController.obtenerOrdenes_pagoPorContrato
);
router.put("/:id", order_pagoController.actualizarOrden_pago);
router.delete("/:id", order_pagoController.eliminarOrden_pago);

module.exports = router;
