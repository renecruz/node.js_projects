const express = require('express');
const router = express.Router();
const direccionController = require('../controllers/direccionController');

router.post('/', direccionController.crearDireccion);
router.get('/', direccionController.obtenerDirecciones);
router.get('/:id', direccionController.obtenerDireccionPorId);
router.get('/calle/:id', direccionController.obtenerDireccionesPorCalle);
router.put('/:id', direccionController.actualizarDireccion);
router.delete('/:id', direccionController.eliminarDireccion);

module.exports = router;