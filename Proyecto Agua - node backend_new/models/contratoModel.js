const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async crearContrato(fecha, tipo_tarifa, activo, toma_hidraulica_id) {
    const nuevoContrato = await prisma.contrato.create({
      data: {
        fecha,
        tipo_tarifa,
        activo,
        toma_hidraulica_id,
      },
    });
    return nuevoContrato;
  },

  async obtenerContratos() {
    const contratos = await prisma.contrato.findMany({
      include: {
        toma_hidraulica: true,
      },
    });
    return contratos;
  },

  async obtenerContratoPorId(id) {
    const contrato = await prisma.contrato.findUnique({
      where: {
        contrato_id: parseInt(id),
      },
      include: {
        toma_hidraulica: true,
      },
    });
    return contrato;
  },

  async obtenerContratoPorToma_hidraulica(id) {
    const contrato = await prisma.contrato.findUnique({
      where: {
        toma_hidraulica_id: id, // el campo es string
      },
      include: {
        toma_hidraulica: true,
      },
    });
    return contrato;
  },

  async actualizarContrato(id, fecha, tipo_tarifa, activo, toma_hidraulica_id) {
    const contratoActualizado = await prisma.contrato.update({
      where: {
        contrato_id: parseInt(id),
      },
      data: {
        fecha,
        tipo_tarifa,
        activo,
        toma_hidraulica_id,
      },
    });
    return contratoActualizado;
  },

  async eliminarContrato(id) {
    const contrato = await prisma.contrato.delete({
      where: {
        contrato_id: parseInt(id),
      },
    });
    return contrato;
  },
};
