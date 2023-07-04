const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearOrden_pago_servicio(orden_pago_servicio) {
    const nuevaOrden_pago_servicio = await prisma.orden_pago_servicio.create({
      data: orden_pago_servicio,
    });
    return nuevaOrden_pago_servicio;
  },

  async obtenerOrdenes_pago_servicio() {
    const orden_pago_servicio = await prisma.orden_pago_servicio.findMany();
    return orden_pago_servicio;
  },

  async obtenerOrden_pago_servicioPorId(orden_id, servicio_id) {
    const orden_pago_servicio = await prisma.orden_pago_servicio.findUnique({
      where: {
        // https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unique-1
        orden_id_servicio_id: {
          orden_id: parseInt(orden_id),
          servicio_id: parseInt(servicio_id),
        },
      },
    });
    return orden_pago_servicio;
  },

  async obtenerOrdenes_pago_servicioPorOrden(orden_id) {
    const ordenes_pago_servicio = await prisma.orden_pago_servicio.findMany({
      where: {
        orden_id: parseInt(orden_id),
      },
    });
    return ordenes_pago_servicio;
  },

  async actualizarOrden_pago_servicio(
    orden_id,
    servicio_id,
    orden_pago_servicio
  ) {
    const orden_pago_servicioActualizado =
      await prisma.orden_pago_servicio.update({
        where: {
          // https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unique-1
          orden_id_servicio_id: {
            orden_id: parseInt(orden_id),
            servicio_id: parseInt(servicio_id),
          },
        },
        data: orden_pago_servicio,
      });
    return orden_pago_servicioActualizado;
  },

  async eliminarOrden_pago_servicio(orden_id, servicio_id) {
    const orden_pago_servicio = await prisma.orden_pago_servicio.delete({
      where: {
        // https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unique-1
        orden_id_servicio_id: {
          orden_id: parseInt(orden_id),
          servicio_id: parseInt(servicio_id),
        },
      },
    });
    return orden_pago_servicio;
  },
};
