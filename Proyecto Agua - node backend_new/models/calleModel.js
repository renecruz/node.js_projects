const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearCalle(calle, colonia_id) {
    const nuevaCalle = await prisma.calle.create({
      data: {
        calle,
        colonia_id,
      },
    });
    return nuevaCalle;
  },

  async obtenerCalles() {
    const calles = await prisma.calle.findMany();
    return calles;
  },

  async obtenerCallePorId(id) {
    const calle = await prisma.calle.findUnique({
      where: {
        calle_id: parseInt(id),
      },
    });
    return calle;
  },

  async obtenerCallesPorColonia(id) {
    const calles = await prisma.calle.findMany({
      where: {
        colonia_id: parseInt(id),
      },
      include: {
        colonia: true,
      },
    });
    return calles;
  },

  async actualizarCalle(id, data) {
    const { calle, colonia_id } = data;

    const calleActualizada = await prisma.calle.update({
      where: {
        calle_id: parseInt(id),
      },
      data: {
        calle,
        colonia_id,
      },
    });
    return calleActualizada;
  },

  async eliminarCalle(id) {
    const calle = await prisma.calle.delete({
      where: {
        calle_id: parseInt(id),
      },
    });
    return calle;
  },
};
