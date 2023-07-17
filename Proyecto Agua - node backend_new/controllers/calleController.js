const calleModel = require("../models/calleModel");

const crearCalle = async (req, res, next) => {
  try {
    const { calle, colonia_id } = req.body;
    const nuevaCalle = await calleModel.crearCalle(
      calle,
      colonia_id
    );
    res.json(nuevaCalle);
  } catch (error) {
    next(error);
  }
};

const obtenerCalles = async (req, res, next) => {
  try {
    const calles = await calleModel.obtenerCalles();
    res.json(calles);
  } catch (error) {
    next(error);
  }
};

const obtenerCallePorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const calle = await calleModel.obtenerCallePorId(id);
    res.json(calle);
  } catch (error) {
    next(error);
  }
}

const obtenerCallesPorColonia = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const calles = await calleModel.obtenerCallesPorColonia(id);
    res.json(calles);
  } catch (error) {
    next(error);
  }
}

const actualizarCalle = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const calleActualizada = await calleModel.actualizarCalle(id, req.body);
    res.json(calleActualizada);
  } catch (error) {
    next(error);
  }
}

const eliminarCalle = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const calle = await calleModel.eliminarCalle(id);
    res.json(calle);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearCalle,
  obtenerCalles,
  obtenerCallePorId,
  obtenerCallesPorColonia,
  actualizarCalle,
  eliminarCalle
};
