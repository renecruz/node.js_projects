const medidorModel = require("../models/medidorModel");

const crearMedidor = async (req, res, next) => {
  try {
    const { medidor_id, tipo, marca, activo } = req.body;
    const nuevoMedidor = await medidorModel.crearMedidor(
      medidor_id,
      tipo, 
      marca,
      activo
    );
    res.json(nuevoMedidor);
  } catch (error) {
    next(error);
  }
};

const obtenerMedidores = async (req, res, next) => {
  try {
    const municipios = await medidorModel.obtenerMedidores();
    res.json(municipios);
  } catch (error) {
    next(error);
  }
};

const obtenerMedidorPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const medidor = await medidorModel.obtenerMedidorPorId(id);
    res.json(medidor);
  } catch (error) {
    next(error);
  }
}

const obtenerMedidoresPorEstado = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const medidores = await medidorModel.obtenerMedidoresPorEstado(id);
    res.json(medidores);
  } catch (error) {
    next(error);
  }
}

const actualizarMedidor = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const medidorActualizado = await medidorModel.actualizarMedidor(id, req.body);
    res.json(medidorActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarMedidor = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const medidor = await medidorModel.eliminarMedidor(id);
    res.json(medidor);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearMedidor,
  obtenerMedidores,
  obtenerMedidorPorId,
  obtenerMedidoresPorEstado,
  actualizarMedidor,
  eliminarMedidor
};
