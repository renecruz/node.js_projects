const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

router.post('/', contratoController.crearContrato);
router.get('/', contratoController.obtenerContratos);
router.get('/:id', contratoController.obtenerContratoPorId);
router.get('/toma_hidraulica/:id', contratoController.obtenerContratoPorToma_hidraulica);
router.put('/:id', contratoController.actualizarContrato);
router.delete('/:id', contratoController.eliminarContrato);

module.exports = router;