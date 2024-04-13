const express = require("express");
const { smsMasivo } = require("./src/cron/cron-sms");

const iniciarServidor = () => {
  const puerto = 3010;
  const app = express();

  app.get("/", (req, res) => {
    res.send("¡Hola, mundo desde Express!");
  });

  app.listen(puerto, () => {
    console.log(`Servidor Express iniciado en el puerto ${puerto}`);
  });
};

const iniciarTareaCron = () => {
  if (!smsMasivo.running) {
    smsMasivo.start();
    console.log("Sms masivo campana Digital iniciado");
  }
};

module.exports = { iniciarServidor, iniciarTareaCron };
