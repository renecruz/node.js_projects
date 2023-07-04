const express = require('express');
const router = express.Router();
const toma_hidraulicaController = require('../controllers/toma_hidraulicaController');

router.post('/', toma_hidraulicaController.crearToma_hidraulica);
router.get('/', toma_hidraulicaController.obtenerTomas_hidraulicas);
router.get('/:id', toma_hidraulicaController.obtenerToma_hidraulicaPorId);
router.get('/direccion/:id', toma_hidraulicaController.obtenerToma_hidraulicaPorDireccion);
router.get('/medidor/:id', toma_hidraulicaController.obtenerToma_hidraulicaPorMedidor);
router.put('/:id', toma_hidraulicaController.actualizarToma_hidraulica);
router.delete('/:id', toma_hidraulicaController.eliminarToma_hidraulica);

module.exports = router;