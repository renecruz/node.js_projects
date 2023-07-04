const localidadModel = require("../models/localidadModel");

const crearLocalidad = async (req, res, next) => {
  try {
    const { localidad, tipo, municipio_id } = req.body;
    const nuevaLocalidad = await localidadModel.crearLocalidad(
      localidad,
      tipo,
      municipio_id
    );
    res.json(nuevaLocalidad);
  } catch (error) {
    next(error);
  }
};

const obtenerLocalidades = async (req, res, next) => {
  try {
    const localidades = await localidadModel.obtenerLocalidades();
    res.json(localidades);
  } catch (error) {
    next(error);
  }
};

const obtenerLocalidadPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const localidad = await localidadModel.obtenerLocalidadPorId(id);
    res.json(localidad);
  } catch (error) {
    next(error);
  }
}

const obtenerLocalidadesPorMunicipio = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const localidades = await localidadModel.obtenerLocalidadesPorMunicipio(id);
    res.json(localidades);
  } catch (error) {
    next(error);
  }
}

const actualizarLocalidad = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const localidadActualizada = await localidadModel.actualizarLocalidad(id, req.body);
    res.json(localidadActualizada);
  } catch (error) {
    next(error);
  }
}

const eliminarLocalidad = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const localidad = await localidadModel.eliminarLocalidad(id);
    res.json(localidad);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearLocalidad,
  obtenerLocalidades,
  obtenerLocalidadPorId,
  obtenerLocalidadesPorMunicipio,
  actualizarLocalidad,
  eliminarLocalidad
};
