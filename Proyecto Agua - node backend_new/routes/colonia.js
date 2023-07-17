const express = require('express');
const router = express.Router();
const coloniaController = require('../controllers/coloniaController');

router.post('/', coloniaController.crearColonia);
router.get('/', coloniaController.obtenerColonias);
router.get('/:id', coloniaController.obtenerColoniaPorId);
router.get('/localidad/:id', coloniaController.obtenerColoniasPorLocalidad);
router.put('/:id', coloniaController.actualizarColonia);
router.delete('/:id', coloniaController.eliminarColonia);

module.exports = router;