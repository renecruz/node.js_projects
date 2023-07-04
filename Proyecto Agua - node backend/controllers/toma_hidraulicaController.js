const toma_hidraulicaModel = require("../models/toma_hidraulicaModel");

const crearToma_hidraulica = async (req, res, next) => {
  try {
    const { toma_hidraulica_id, latitud, longitud, direccion_id, medidor_id } = req.body;
    const nuevaToma_hidraulica = await toma_hidraulicaModel.crearToma_hidraulica(
      toma_hidraulica_id, latitud, longitud, direccion_id, medidor_id
    );
    res.json(nuevaToma_hidraulica);
  } catch (error) {
    next(error);
  }
};

const obtenerTomas_hidraulicas = async (req, res, next) => {
  try {
    const tomas_hidraulicas = await toma_hidraulicaModel.obtenerTomas_hidraulicas();
    res.json(tomas_hidraulicas);
  } catch (error) {
    next(error);
  }
};

const obtenerToma_hidraulicaPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const toma_hidraulica = await toma_hidraulicaModel.obtenerToma_hidraulicaPorId(id);
    res.json(toma_hidraulica);
  } catch (error) {
    next(error);
  }
}

const obtenerToma_hidraulicaPorDireccion = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const toma_hidraulica = await toma_hidraulicaModel.obtenerToma_hidraulicaPorDireccion(id);
    res.json(toma_hidraulica);
  } catch (error) {
    next(error);
  }
}

const obtenerToma_hidraulicaPorMedidor = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const toma_hidraulica = await toma_hidraulicaModel.obtenerToma_hidraulicaPorMedidor(id);
    res.json(toma_hidraulica);
  } catch (error) {
    next(error);
  }
}

const actualizarToma_hidraulica = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const medidorActualizado = await toma_hidraulicaModel.actualizarToma_hidraulica(id, req.body);
    res.json(medidorActualizado);
  } catch (error) {
    next(error);
  }
}

const eliminarToma_hidraulica = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const toma_hidraulica = await toma_hidraulicaModel.eliminarToma_hidraulica(id);
    res.json(toma_hidraulica);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearToma_hidraulica,
  obtenerTomas_hidraulicas,
  obtenerToma_hidraulicaPorId,
  obtenerToma_hidraulicaPorDireccion,
  obtenerToma_hidraulicaPorMedidor,
  actualizarToma_hidraulica,
  eliminarToma_hidraulica
};
