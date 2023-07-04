const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearDireccion( direccion, num_exterior, num_interior, referencias, calle_id ) {
    const nuevaDireccion = await prisma.direccion.create({
      data: {
        direccion,
        num_exterior,
        num_interior,
        referencias,
        calle_id
      },
    });
    return nuevaDireccion;
  },

  async obtenerDirecciones() {
    const direcciones = await prisma.direccion.findMany();
    return direcciones;
  },

  async obtenerDireccionPorId(id) {
    const direccion = await prisma.direccion.findUnique({
      where: {
        direccion_id: parseInt(id)
      }
    });
    return direccion;
  },

  async obtenerDireccionesPorCalle(id) {
    const direcciones = await prisma.direccion.findMany({
      where: {
        calle_id: parseInt(id)
      },
      include: {
        calle: true
      }
    });
    return direcciones;
  },

  async actualizarDireccion(id, data)  {          
      const { direccion, num_exterior, num_interior, referencias, calle_id } = data;
  
      const direccionActualizada = await prisma.direccion.update({
        where: {
          direccion_id: parseInt(id)
        },
        data: {
          direccion,
          num_exterior,
          num_interior,
          referencias,
          calle_id
        }
      });
      return direccionActualizada;    
  },

  async eliminarDireccion(id) {
    const direccion = await prisma.direccion.delete({
      where: {
        direccion_id: parseInt(id)
      }
    });
    return direccion;
  },
};