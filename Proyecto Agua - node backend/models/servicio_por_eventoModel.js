const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearServicio(servicio) {
    const nuevoServicio = await prisma.servicio_por_evento.create({
      data: servicio,
    });
    return nuevoServicio;
  },

  async obtenerServicios() {
    const servicios = await prisma.servicio_por_evento.findMany();
    return servicios;
  },

  async obtenerServicioPorId(id) {
    const servicio = await prisma.servicio_por_evento.findUnique({
      where: {
        servicio_id: parseInt(id),
      },
    });
    return servicio;
  },

  async actualizarServicio(id, data) {
    const servicioActualizado = await prisma.servicio_por_evento.update({
      where: {
        servicio_id: parseInt(id),
      },
      data,
    });
    return servicioActualizado;
  },

  async eliminarServicio(id) {
    const servicio = await prisma.servicio_por_evento.delete({
      where: {
        servicio_id: parseInt(id),
      },
    });
    return servicio;
  },
};
