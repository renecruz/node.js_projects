const express = require('express');
const router = express.Router();
const medidorController = require('../controllers/medidorController');

router.post('/', medidorController.crearMedidor);
router.get('/', medidorController.obtenerMedidores);
router.get('/:id', medidorController.obtenerMedidorPorId);
router.get('/estado/:id', medidorController.obtenerMedidoresPorEstado);
router.put('/:id', medidorController.actualizarMedidor);
router.delete('/:id', medidorController.eliminarMedidor);

module.exports = router;