const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearPago(pago) {
    pago.fecha = new Date(pago.fecha);
    const nuevo_pago = await prisma.pago.create({
      data: pago,
    });
    return nuevo_pago;
  },

  async obtenerPagos() {
    const pagos = await prisma.pago.findMany();
    return pagos;
  },

  async obtenerPagoPorId(id) {
    const pago = await prisma.pago.findUnique({
      where: {
        pago_id: parseInt(id),
      },
    });
    return pago;
  },

  async obtenerPagosPorOrden(id) {
    const pagos = await prisma.pago.findMany({
      where: {
        orden_id: parseInt(id),
      },
    });
    return pagos;
  },

  async actualizarPago(id, data) {
    data.fecha = new Date(data.fecha);
    const pagoActualizado = await prisma.pago.update({
      where: {
        pago_id: parseInt(id),
      },
      data,
    });
    return pagoActualizado;
  },

  async eliminarPago(id) {
    const pago = await prisma.pago.delete({
      where: {
        pago_id: parseInt(id),
      },
    });
    return pago;
  },
};
