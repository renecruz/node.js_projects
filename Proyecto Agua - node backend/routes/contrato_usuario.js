const express = require('express');
const router = express.Router();
const contrato_usuarioController = require('../controllers/contrato_usuarioController');

router.post('/', contrato_usuarioController.crearContrato_usuario);
router.get('/', contrato_usuarioController.obtenerContratos_usuarios);
router.get('/:contrato_id/:usuario_id', contrato_usuarioController.obtenerContrato_usuarioPorId);
router.put('/:contrato_id/:usuario_id', contrato_usuarioController.actualizarContrato_usuario);
router.delete('/:contrato_id/:usuario_id', contrato_usuarioController.eliminarContrato_usuario);

module.exports = router;