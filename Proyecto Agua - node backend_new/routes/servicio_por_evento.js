const express = require("express");
const router = express.Router();
const servicio_por_eventoController = require("../controllers/servicio_por_eventoController");

router.post("/", servicio_por_eventoController.crearServicio);
router.get("/", servicio_por_eventoController.obtenerServicios);
router.get("/:id", servicio_por_eventoController.obtenerServicioPorId);
router.put("/:id", servicio_por_eventoController.actualizarServicio);
router.delete("/:id", servicio_por_eventoController.eliminarServicio);

module.exports = router;
