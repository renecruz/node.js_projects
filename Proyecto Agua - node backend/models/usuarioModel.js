const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearUsuario(data) {
    const { nombre, ap_paterno, ap_materno, email, telefono, fecha_nacimiento, presento_inapan, url_inapan_img, presento_ine, url_ine_img } = data;
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre, ap_paterno, ap_materno, email, telefono, fecha_nacimiento, presento_inapan, url_inapan_img, presento_ine, url_ine_img
      },
    });
    return nuevoUsuario;
  },

  async obtenerUsuarios() {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
  },

  async obtenerUsuarioPorId(id) {
    const usuario = await prisma.usuario.findUnique({
      where: {
        usuario_id: parseInt(id)
      }
    });
    return usuario;
  },

  async actualizarUsuario(id, data)  {          
    const { nombre, ap_paterno, ap_materno, email, telefono, fecha_nacimiento, presento_inapan, url_inapan_img, presento_ine, url_ine_img } = data;  
    const usuarioActualizado = await prisma.usuario.update({
      where: {
        usuario_id: parseInt(id)
      },
      data: {
        nombre, ap_paterno, ap_materno, email, telefono, fecha_nacimiento, presento_inapan, url_inapan_img, presento_ine, url_ine_img
      }
    });
    return usuarioActualizado;    
  },

  async eliminarUsuario(id) {
    const usuario = await prisma.usuario.delete({
      where: {
        usuario_id: parseInt(id)
      }
    });
    return usuario;
  },
};