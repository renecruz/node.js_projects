const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearColonia(colonia, codigo_postal, localidad_id) {
    const nuevaColonia = await prisma.colonia.create({
      data: {
        colonia,
        codigo_postal,
        localidad_id,
      },
    });
    return nuevaColonia;
  },

  async obtenerColonias() {
    const colonias = await prisma.colonia.findMany();
    return colonias;
  },

  async obtenerColoniaPorId(id) {
    const colonia = await prisma.colonia.findUnique({
      where: {
        colonia_id: parseInt(id)
      }
    });
    return colonia;
  },

  async obtenerColoniasPorLocalidad(id) {
    const colonias = await prisma.colonia.findMany({
      where: {
        localidad_id: parseInt(id)
      },
      include: {
        localidad: true
      }
    });
    return colonias;
  },

  async actualizarColonia(id, data)  {          
      const { colonia, codigo_postal, localidad_id } = data;
  
      const coloniaActualizada = await prisma.colonia.update({
        where: {
          colonia_id: parseInt(id)
        },
        data: {
          colonia,
          codigo_postal,
          localidad_id
        }
      });
      return coloniaActualizada;    
  },

  async eliminarColonia(id) {
    const colonia = await prisma.colonia.delete({
      where: {
        colonia_id: parseInt(id)
      }
    });
    return colonia;
  },
};