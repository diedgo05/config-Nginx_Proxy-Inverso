const express = require('express');
const app = express();
const port = 8080;
const os = require('os');

app.get('/', (req, res) => {
  const hostname = os.hostname();
  const ip = req.socket.localAddress;

  res.send(`Respuesta del Servidor ${hostname}: IP: ${ip} Puerto: ${port}`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});