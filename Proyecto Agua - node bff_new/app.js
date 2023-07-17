//¡Claro! Aquí tienes el ejemplo anterior actualizado para utilizar el enrutador (router) de Express:

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const router = express.Router();
// Importar enrutadores
const estadoRouter = require('./routes/estado');

app.use(express.json());

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido al BFF: Pozo San Lucas Amalinalco, Chalco.');
});

// Rutas de la app con el prefijo: /bff
app.use('/bff/estados', estadoRouter);

app.listen(3500, () => {
  console.log('Servidor en ejecución en http://localhost:3500');
});
