const express = require("express");
const cors = require("cors");
const app = express();

// Importar enrutadores
const estadoRouter = require("./routes/estado");
const municipioRouter = require("./routes/municipio");
const localidadRouter = require("./routes/localidad");
const coloniaRouter = require("./routes/colonia");
const calleRouter = require("./routes/calle");
const direccionRouter = require("./routes/direccion");
const medidorRouter = require("./routes/medidor");
const lectura_medidorRouter = require("./routes/lectura_medidor");
const toma_hidraulicaRouter = require("./routes/toma_hidraulica");
const usuarioRouter = require("./routes/usuario");
const contratoRouter = require("./routes/contrato");
const contrato_usuarioRouter = require("./routes/contrato_usuario");
const servicio_por_eventoRouter = require("./routes/servicio_por_evento");
const servicio_por_consumoRouter = require("./routes/servicio_por_consumo");
const servicio_recurrenteRouter = require("./routes/servicio_recurrente");
const orden_pagoRouter = require("./routes/orden_pago");
const orden_pago_servicioRouter = require("./routes/orden_pago_servicio");
const pagoRouter = require("./routes/pago");

app.use(cors());
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.send("¡Bienvenido a API REST: Pozo San Lucas Amalinalco, Chalco.");
});

// Rutas de la app con el prefijo: /api
app.use("/api/estados", estadoRouter);
app.use("/api/municipios", municipioRouter);
app.use("/api/localidades", localidadRouter);
app.use("/api/colonias", coloniaRouter);
app.use("/api/calles", calleRouter);
app.use("/api/direcciones", direccionRouter);
app.use("/api/medidores", medidorRouter);
app.use("/api/lecturas_medidores", lectura_medidorRouter);
app.use("/api/tomas_hidraulicas", toma_hidraulicaRouter);
app.use("/api/usuarios", usuarioRouter);
app.use("/api/contratos", contratoRouter);
app.use("/api/contratos_usuarios", contrato_usuarioRouter);
app.use("/api/servicios_por_evento", servicio_por_eventoRouter);
app.use("/api/servicios_por_consumo", servicio_por_consumoRouter);
app.use("/api/servicios_recurrentes", servicio_recurrenteRouter);
app.use("/api/ordenes_pago", orden_pagoRouter);
app.use("/api/ordenes_pago_servicio", orden_pago_servicioRouter);
app.use("/api/pagos", pagoRouter);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error en el servidor" });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
