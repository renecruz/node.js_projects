const express = require('express');
const router = express.Router();
const localidadController = require('../controllers/localidadController');

router.post('/', localidadController.crearLocalidad);
router.get('/', localidadController.obtenerLocalidades);
router.get('/:id', localidadController.obtenerLocalidadPorId);
router.get('/municipio/:id', localidadController.obtenerLocalidadesPorMunicipio);
router.put('/:id', localidadController.actualizarLocalidad);
router.delete('/:id', localidadController.eliminarLocalidad);

module.exports = router;