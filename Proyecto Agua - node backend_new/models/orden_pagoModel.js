const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearOrden_pago(orden_pago) {
    orden_pago.fecha = new Date(orden_pago.fecha);
    const nuevaOrder_pago = await prisma.orden_pago.create({
      data: orden_pago,
    });
    return nuevaOrder_pago;
  },

  async obtenerOrdenes_pago() {
    const ordenes_pago = await prisma.orden_pago.findMany();
    return ordenes_pago;
  },

  async obtenerOrden_pagoPorId(id) {
    const orden_pago = await prisma.orden_pago.findUnique({
      where: {
        orden_id: parseInt(id),
      },
    });
    return orden_pago;
  },

  async obtenerOrdenes_pagoPorContrato(id) {
    const ordenes_pago = await prisma.orden_pago.findMany({
      where: {
        contrato_id: parseInt(id),
      },
    });
    return ordenes_pago;
  },

  async actualizarOrden_pago(id, data) {
    data.fecha = new Date(data.fecha);
    const orden_pagoActualizado = await prisma.orden_pago.update({
      where: {
        orden_id: parseInt(id),
      },
      data,
    });
    return orden_pagoActualizado;
  },

  async eliminarOrden_pago(id) {
    const orden_pago = await prisma.orden_pago.delete({
      where: {
        orden_id: parseInt(id),
      },
    });
    return orden_pago;
  },
};
