const express = require('express');
const app = express();
const port = 8081;
const os = require('os');

app.get('/', (req, res) => {
  const hostname = os.hostname();
  const ip = req.socket.localAddress;
  res.send(`Respuesta del Backend2 (${hostname}): IP ${ip} Puerto ${port}`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend2 escuchando en puerto ${port}`);
});