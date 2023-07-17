const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearServicio(servicio) {
    const nuevoServicio = await prisma.servicio_por_consumo.create({
      data: servicio,
    });
    return nuevoServicio;
  },

  async obtenerServicios() {
    const servicios = await prisma.servicio_por_consumo.findMany();
    return servicios;
  },

  async obtenerServicioPorId(id) {
    const servicio = await prisma.servicio_por_consumo.findUnique({
      where: {
        servicio_id: parseInt(id),
      },
    });
    return servicio;
  },

  async actualizarServicio(id, data) {
    const servicioActualizado = await prisma.servicio_por_consumo.update({
      where: {
        servicio_id: parseInt(id),
      },
      data,
    });
    return servicioActualizado;
  },

  async eliminarServicio(id) {
    const servicio = await prisma.servicio_por_consumo.delete({
      where: {
        servicio_id: parseInt(id),
      },
    });
    return servicio;
  },
};
