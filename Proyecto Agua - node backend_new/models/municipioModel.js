const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearMunicipio(municipio, estado_id) {
    const nuevoMunicipio = await prisma.municipio.create({
      data: {
        municipio,
        estado_id,
      },
    });
    return nuevoMunicipio;
  },

  async obtenerMunicipios() {
    const municipios = await prisma.municipio.findMany();
    return municipios;
  },

  async obtenerMunicipioPorId(id) {
    const municipio = await prisma.municipio.findUnique({
      where: {
        municipio_id: parseInt(id)
      }
    });
    return municipio;
  },

  async obtenerMunicipiosPorEstado(id) {
    const municipios = await prisma.municipio.findMany({
      where: {
        estado_id: parseInt(id)
      },
      include: {
        estado: true
      }
    });
    return municipios;
  },

  async actualizarMunicipio(id, data)  {          
      const { municipio, estado_id } = data;
  
      const municipioActualizado = await prisma.municipio.update({
        where: {
          municipio_id: parseInt(id)
        },
        data: {
          municipio,
          estado_id,
        }
      });
      return municipioActualizado;    
  },

  async eliminarMunicipio(id) {
    const municipio = await prisma.municipio.delete({
      where: {
        municipio_id: parseInt(id)
      }
    });
    return municipio;
  },
};