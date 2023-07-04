const municipioModel = require("../models/municipioModel");

const crearMunicipio = async (req, res, next) => {
  try {
    const { municipio, estado_id } = req.body;
    const nuevoMunicipio = await municipioModel.crearMunicipio(
      municipio,
      estado_id
    );
    res.json(nuevoMunicipio);
  } catch (error) {
    next(error);
  }
};

const obtenerMunicipios = async (req, res, next) => {
  try {
    const municipios = await municipioModel.obtenerMunicipios();
    res.json(municipios);
  } catch (error) {
    next(error);
  }
};

const obtenerMunicipioPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const municipio = await municipioModel.obtenerMunicipioPorId(id);
    res.json(municipio);
  } catch (error) {
    next(error);
  }
}

const obtenerMunicipiosPorEstado = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const municipio = await municipioModel.obtenerMunicipiosPorEstado(id);
    res.json(municipio);
  } catch (error) {
    next(error);
  }
}

const actualizarMunicipio = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const municipioActualizado = await municipioModel.actualizarMunicipio(id, req.body);
    res.json(municipioActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarMunicipio = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const municipio = await municipioModel.eliminarMunicipio(id);
    res.json(municipio);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearMunicipio,
  obtenerMunicipios,
  obtenerMunicipioPorId,
  obtenerMunicipiosPorEstado,
  actualizarMunicipio,
  eliminarMunicipio
};
