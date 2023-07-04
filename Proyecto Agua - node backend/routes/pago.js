const express = require("express");
const router = express.Router();
const pagoController = require("../controllers/pagoController");

router.post("/", pagoController.crearPago);
router.get("/", pagoController.obtenerPagos);
router.get("/:id", pagoController.obtenerPagoPorId);
router.get("/orden/:id", pagoController.obtenerPagosPorOrden);
router.put("/:id", pagoController.actualizarPago);
router.delete("/:id", pagoController.eliminarPago);

module.exports = router;
