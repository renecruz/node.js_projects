const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearServicio(servicio) {
    const nuevoServicio = await prisma.servicio_recurrente.create({
      data: servicio,
    });
    return nuevoServicio;
  },

  async obtenerServicios() {
    const servicios = await prisma.servicio_recurrente.findMany();
    return servicios;
  },

  async obtenerServicioPorId(id) {
    const servicio = await prisma.servicio_recurrente.findUnique({
      where: {
        servicio_id: parseInt(id),
      },
    });
    return servicio;
  },

  async actualizarServicio(id, data) {
    const servicioActualizado = await prisma.servicio_recurrente.update({
      where: {
        servicio_id: parseInt(id),
      },
      data,
    });
    return servicioActualizado;
  },

  async eliminarServicio(id) {
    const servicio = await prisma.servicio_recurrente.delete({
      where: {
        servicio_id: parseInt(id),
      },
    });
    return servicio;
  },
};
