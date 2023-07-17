const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearContrato_usuario(contrato_id, usuario_id, es_adherido) {
    const nuevoContrato_usuario = await prisma.contrato_usuario.create({
      data: {
        contrato_id, usuario_id, es_adherido
      },
    });
    return nuevoContrato_usuario;
  },

  async obtenerContratos_usuarios() {
    const contratos_usuarios = await prisma.contrato_usuario.findMany();
    return contratos_usuarios;
  },

  async obtenerContrato_usuarioPorId(contrato_id, usuario_id) {
    const contrato_usuario = await prisma.contrato_usuario.findUnique({
      where: { // https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unique-1
        contrato_id_usuario_id: { 
          contrato_id: parseInt(contrato_id),
          usuario_id: parseInt(usuario_id)
        },
      }
    });
    return contrato_usuario;
  },

  async actualizarContrato_usuario(contrato_id, usuario_id, es_adherido)  {                
      const contrato_usuarioActualizado = await prisma.contrato_usuario.update({
        where: { // https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unique-1
          contrato_id_usuario_id: { 
            contrato_id: parseInt(contrato_id),
            usuario_id: parseInt(usuario_id)
          },
        },
        data: {
          es_adherido
        }
      });
      return contrato_usuarioActualizado;    
  },

  async eliminarContrato_usuario(contrato_id, usuario_id) {
    const contrato_usuario = await prisma.contrato_usuario.delete({
      where: {
        contrato_id_usuario_id: { 
          contrato_id: parseInt(contrato_id),
          usuario_id: parseInt(usuario_id)
        },
      }
    });
    return contrato_usuario;
  },
};