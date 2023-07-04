const express = require('express');
const router = express.Router();
const lectura_medidorController = require('../controllers/lectura_medidorController');

router.post('/', lectura_medidorController.crearLectura_medidor);
router.get('/', lectura_medidorController.obtenerLectura_medidores);
router.get('/:id', lectura_medidorController.obtenerLectura_medidorPorId);
router.get('/medidor/:id', lectura_medidorController.obtenerLecturas_medidorPorMedidor);
router.put('/:id', lectura_medidorController.actualizarLectura_medidor);
router.delete('/:id', lectura_medidorController.eliminarLectura_medidor);

module.exports = router;