const direccionModel = require("../models/direccionModel");

const crearDireccion = async (req, res, next) => {
  try {
    const { direccion, num_exterior, num_interior, referencias, calle_id } = req.body;
    const nuevaDireccion = await direccionModel.crearDireccion(
      direccion,
      num_exterior,
      num_interior,
      referencias,
      calle_id
    );
    res.json(nuevaDireccion);
  } catch (error) {
    next(error);
  }
};

const obtenerDirecciones = async (req, res, next) => {
  try {
    const direcciones = await direccionModel.obtenerDirecciones();
    res.json(direcciones);
  } catch (error) {
    next(error);
  }
};

const obtenerDireccionPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const direccion = await direccionModel.obtenerDireccionPorId(id);
    res.json(direccion);
  } catch (error) {
    next(error);
  }
}

const obtenerDireccionesPorCalle = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const direcciones = await direccionModel.obtenerDireccionesPorCalle(id);
    res.json(direcciones);
  } catch (error) {
    next(error);
  }
}

const actualizarDireccion = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const direccionActualizada = await direccionModel.actualizarDireccion(id, req.body);
    res.json(direccionActualizada);
  } catch (error) {
    next(error);
  }
}

const eliminarDireccion = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const direccion = await direccionModel.eliminarDireccion(id);
    res.json(direccion);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearDireccion,
  obtenerDirecciones,
  obtenerDireccionPorId,
  obtenerDireccionesPorCalle,
  actualizarDireccion,
  eliminarDireccion
};
