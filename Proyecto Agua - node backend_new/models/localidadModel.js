const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearLocalidad(localidad, tipo, municipio_id) {
    const nuevaLocalidad = await prisma.localidad.create({
      data: {
        localidad,
        tipo,
        municipio_id
      },
    });
    return nuevaLocalidad;
  },

  async obtenerLocalidades() {
    const localidades = await prisma.localidad.findMany();
    return localidades;
  },

  async obtenerLocalidadPorId(id) {
    const localidad = await prisma.localidad.findUnique({
      where: {
        localidad_id: parseInt(id)
      }
    });
    return localidad;
  },

  async obtenerLocalidadesPorMunicipio(id) {
    const localidades = await prisma.localidad.findMany({
      where: {
        municipio_id: parseInt(id)
      },
      include: {
        municipio: true
      }
    });
    return localidades;
  },

  async actualizarLocalidad(id, data)  {          
      const { localidad, tipo, municipio_id } = data;
  
      const localidadActualizada = await prisma.localidad.update({
        where: {
          localidad_id: parseInt(id)
        },
        data: {
          localidad,
          tipo,
          municipio_id,
        }
      });
      return localidadActualizada;    
  },

  async eliminarLocalidad(id) {
    const localidad = await prisma.localidad.delete({
      where: {
        localidad_id: parseInt(id)
      }
    });
    return localidad;
  },
};