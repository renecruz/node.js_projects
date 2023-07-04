const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearToma_hidraulica( toma_hidraulica_id, latitud, longitud, direccion_id, medidor_id ) {
    const nuevaToma_hidraulica = await prisma.toma_hidraulica.create({
      data: {
        toma_hidraulica_id, latitud, longitud, direccion_id, medidor_id
      },
    });
    return nuevaToma_hidraulica;
  },

  async obtenerTomas_hidraulicas() {
    const tomas_hidraulicas = await prisma.toma_hidraulica.findMany({
      include: {
        direccion: true,
        medidor: true
      }
    });
    return tomas_hidraulicas;
  },

  async obtenerToma_hidraulicaPorId(id) {
    const toma_hidraulica = await prisma.toma_hidraulica.findUnique({
      where: {
        toma_hidraulica_id: id // campo String
      },
      include: {
        direccion: true,
        medidor: true
      }
    });
    return toma_hidraulica;
  },

  async obtenerToma_hidraulicaPorDireccion(id) {
    const toma_hidraulica = await prisma.toma_hidraulica.findUnique({
      where: {
        direccion_id: parseInt(id) // campo int
      },
      include: {
        direccion: true,
        medidor: true
      }
    });
    return toma_hidraulica;
  },

  async obtenerToma_hidraulicaPorMedidor(id) {
    const toma_hidraulica = await prisma.toma_hidraulica.findUnique({
      where: {
        medidor_id: id // campo String
      },
      include: {
        direccion: true,
        medidor: true
      }
    });
    return toma_hidraulica;
  },

  async actualizarToma_hidraulica(id, data)  {          
      const { latitud, longitud, direccion_id, medidor_id } = data;
  
      const toma_hidraulicaActualizada = await prisma.toma_hidraulica.update({
        where: {
          toma_hidraulica_id: id // campo String
        },
        data: {
          latitud, longitud, direccion_id, medidor_id
        }
      });
      return toma_hidraulicaActualizada;    
  },

  async eliminarToma_hidraulica(id) {
    const toma_hidraulica = await prisma.toma_hidraulica.delete({
      where: {
        toma_hidraulica_id: id // campo String
      }
    });
    return toma_hidraulica;
  },
};