const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  async crearLectura_medidor(fecha, lectura_anterior, lectura_actual, pagada, medidor_id) {
    const nuevaLectura_medidor = await prisma.lectura_medidor.create({
      data: {
        fecha, lectura_anterior, lectura_actual, pagada, medidor_id 
      },
    });
    return nuevaLectura_medidor;
  },

  async obtenerLectura_medidores() {
    const lectura_medidores = await prisma.lectura_medidor.findMany();
    return lectura_medidores;
  },

  async obtenerLectura_medidorPorId(id) {
    const lectura_medidor = await prisma.lectura_medidor.findUnique({
      where: {
        lectura_id: parseInt(id)
      }
    });
    return lectura_medidor;
  },

  async obtenerLecturas_medidorPorMedidor(id) {
    const lecturas_medidor = await prisma.lectura_medidor.findMany({
      where: {
        medidor_id: id // medidor_id is a String
      }
    });
    return lecturas_medidor;
  },

  async actualizarLectura_medidor(id, fecha, lectura_anterior, lectura_actual, pagada, medidor_id)  {                
      const lectura_medidorActualizada = await prisma.lectura_medidor.update({
        where: {
          lectura_id: parseInt(id)
        },
        data: {
          fecha, lectura_anterior, lectura_actual, pagada, medidor_id
        }
      });
      return lectura_medidorActualizada;    
  },

  async eliminarLectura_medidor(id) {
    const lectura_medidor = await prisma.lectura_medidor.delete({
      where: {
        lectura_id: parseInt(id)
      }
    });
    return lectura_medidor;
  },
};