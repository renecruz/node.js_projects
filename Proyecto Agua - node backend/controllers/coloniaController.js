const coloniaModel = require("../models/coloniaModel");

const crearColonia = async (req, res, next) => {
  try {
    const { colonia, codigo_postal, localidad_id } = req.body;
    const nuevaColonia = await coloniaModel.crearColonia(
      colonia,
      codigo_postal,
      localidad_id
    );
    res.json(nuevaColonia);
  } catch (error) {
    next(error);
  }
};

const obtenerColonias = async (req, res, next) => {
  try {
    const colonias = await coloniaModel.obtenerColonias();
    res.json(colonias);
  } catch (error) {
    next(error);
  }
};

const obtenerColoniaPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const colonia = await coloniaModel.obtenerColoniaPorId(id);
    res.json(colonia);
  } catch (error) {
    next(error);
  }
}

const obtenerColoniasPorLocalidad = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const colonias = await coloniaModel.obtenerColoniasPorLocalidad(id);
    res.json(colonias);
  } catch (error) {
    next(error);
  }
}

const actualizarColonia = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const coloniaActualizada = await coloniaModel.actualizarColonia(id, req.body);
    res.json(coloniaActualizada);
  } catch (error) {
    next(error);
  }
}

const eliminarColonia = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const colonia = await coloniaModel.eliminarColonia(id);
    res.json(colonia);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearColonia,
  obtenerColonias,
  obtenerColoniaPorId,
  obtenerColoniasPorLocalidad,
  actualizarColonia,
  eliminarColonia
};
