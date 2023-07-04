const express = require('express');
const router = express.Router();
const calleController = require('../controllers/calleController');

router.post('/', calleController.crearCalle);
router.get('/', calleController.obtenerCalles);
router.get('/:id', calleController.obtenerCallePorId);
router.get('/colonia/:id', calleController.obtenerCallesPorColonia);
router.put('/:id', calleController.actualizarCalle);
router.delete('/:id', calleController.eliminarCalle);

module.exports = router;