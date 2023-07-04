const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearEstado(estado, abreviatura, latitud, longitud) {
    const nuevoEstado = await prisma.estado.create({
      data: {
        estado,
        abreviatura,
        latitud,
        longitud,
      },
    });
    return nuevoEstado;
  },

  async obtenerEstados() {
    const estados = await prisma.estado.findMany();
    return estados;
  },

  async obtenerEstadoPorId(id) {
    const estado = await prisma.estado.findUnique({
      where: {
        estado_id: parseInt(id),
      },
    });
    return estado;
  },

  async actualizarEstado(id, data) {
    const { estado, abreviatura, latitud, longitud } = data;

    const estadoActualizado = await prisma.estado.update({
      where: {
        estado_id: parseInt(id),
      },
      data: {
        estado,
        abreviatura,
        latitud,
        longitud,
      },
    });
    return estadoActualizado;
  },

  async eliminarEstado(id) {
    const estado = await prisma.estado.delete({
      where: {
        estado_id: parseInt(id),
      },
    });
    return estado;
  },
};
