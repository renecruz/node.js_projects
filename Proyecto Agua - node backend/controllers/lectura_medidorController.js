const lectura_medidorModel = require("../models/lectura_medidorModel");

const crearLectura_medidor = async (req, res, next) => {
  try {
    const { fecha, lectura_anterior, lectura_actual, pagada, medidor_id } = req.body;    
    const nuevaLectura_medidor = await lectura_medidorModel.crearLectura_medidor(      
      new Date(fecha), lectura_anterior, lectura_actual, pagada, medidor_id // fecha debe ser tipo Date y llega String
    );
    res.json(nuevaLectura_medidor);
  } catch (error) {
    next(error);
  }
};

const obtenerLectura_medidores = async (req, res, next) => {
  try {
    const lectura_medidores = await lectura_medidorModel.obtenerLectura_medidores();
    res.json(lectura_medidores);
  } catch (error) {
    next(error);
  }
};

const obtenerLectura_medidorPorId = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const lectura_medidor = await lectura_medidorModel.obtenerLectura_medidorPorId(id);
    res.json(lectura_medidor);
  } catch (error) {
    next(error);
  }
}

const obtenerLecturas_medidorPorMedidor = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const lecturas_medidor = await lectura_medidorModel.obtenerLecturas_medidorPorMedidor(id);
    res.json(lecturas_medidor);
  } catch (error) {
    next(error);
  }
}

const actualizarLectura_medidor = async(req, res, next) => { 
  try {
    const { id } = req.params;
    const { fecha, lectura_anterior, lectura_actual, pagada, medidor_id } = req.body;
    const lectura_medidorActualizada = await lectura_medidorModel.actualizarLectura_medidor(id, new Date(fecha), lectura_anterior, lectura_actual, pagada, medidor_id);
    res.json(lectura_medidorActualizada);
  } catch (error) {
    next(error);
  }
}

const eliminarLectura_medidor = async (req, res, next) => { 
  try {
    const { id } = req.params;
    const lectura_medidor = await lectura_medidorModel.eliminarLectura_medidor(id);
    res.json(lectura_medidor);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  crearLectura_medidor,
  obtenerLectura_medidores,
  obtenerLectura_medidorPorId,
  obtenerLecturas_medidorPorMedidor,
  actualizarLectura_medidor,
  eliminarLectura_medidor
};
