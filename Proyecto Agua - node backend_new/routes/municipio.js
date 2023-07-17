const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioController');

router.post('/', municipioController.crearMunicipio);
router.get('/', municipioController.obtenerMunicipios);
router.get('/:id', municipioController.obtenerMunicipioPorId);
router.get('/estado/:id', municipioController.obtenerMunicipiosPorEstado);
router.put('/:id', municipioController.actualizarMunicipio);
router.delete('/:id', municipioController.eliminarMunicipio);

module.exports = router;