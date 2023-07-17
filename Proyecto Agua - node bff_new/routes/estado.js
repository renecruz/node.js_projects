const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');

router.post('/', estadoController.crearEstado);
router.get('/', estadoController.obtenerEstados);
router.get('/:id', estadoController.obtenerEstadoPorId);
router.put('/:id', estadoController.actualizarEstado);
router.delete('/:id', estadoController.eliminarEstado);

module.exports = router;
