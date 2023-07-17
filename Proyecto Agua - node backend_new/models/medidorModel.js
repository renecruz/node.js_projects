const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearMedidor( medidor_id, tipo, marca, activo ) {
    const nuevoMedidor = await prisma.medidor.create({
      data: {
        medidor_id,
        tipo,
        marca,
        activo
      },
    });
    return nuevoMedidor;
  },

  async obtenerMedidores() {
    const medidores = await prisma.medidor.findMany();
    return medidores;
  },

  async obtenerMedidorPorId(id) {
    const medidor = await prisma.medidor.findUnique({
      where: {
        medidor_id: id // campo String
      }
    });
    return medidor;
  },

  async obtenerMedidoresPorEstado(id) {
    const medidores = await prisma.medidor.findMany({
      where: {
        activo: parseInt(id) // 1 o 0 -> True o False
      }
    });
    return medidores;
  },

  async actualizarMedidor(id, data)  {          
      const { tipo, marca, activo } = data;
  
      const medidorActualizado = await prisma.medidor.update({
        where: {
          medidor_id: id // campo String
        },
        data: {
          tipo,
          marca,
          activo
        }
      });
      return medidorActualizado;    
  },

  async eliminarMedidor(id) {
    const medidor = await prisma.medidor.delete({
      where: {
        medidor_id: id // campo String
      }
    });
    return medidor;
  },
};