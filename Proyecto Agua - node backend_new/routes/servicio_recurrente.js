const express = require("express");
const router = express.Router();
const servicio_recurrenteController = require("../controllers/servicio_recurrenteController");

router.post("/", servicio_recurrenteController.crearServicio);
router.get("/", servicio_recurrenteController.obtenerServicios);
router.get("/:id", servicio_recurrenteController.obtenerServicioPorId);
router.put("/:id", servicio_recurrenteController.actualizarServicio);
router.delete("/:id", servicio_recurrenteController.eliminarServicio);

module.exports = router;
