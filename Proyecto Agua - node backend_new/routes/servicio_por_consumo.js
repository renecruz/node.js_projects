const express = require("express");
const router = express.Router();
const servicio_por_consumoController = require("../controllers/servicio_por_consumoController");

router.post("/", servicio_por_consumoController.crearServicio);
router.get("/", servicio_por_consumoController.obtenerServicios);
router.get("/:id", servicio_por_consumoController.obtenerServicioPorId);
router.put("/:id", servicio_por_consumoController.actualizarServicio);
router.delete("/:id", servicio_por_consumoController.eliminarServicio);

module.exports = router;
