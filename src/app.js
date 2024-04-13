const express = require("express");
const { smsMasivo } = require("./cron/cron-sms");

const iniciarServidor = () => {
  const puerto = 3010;
  const app = express();

  app.get("/crud-cron", (req, res) => {
    const accion = req.params.accion;
    const name = req.params.name;

    switch (accion) {
      case 1: //1
        smsMasivo.start();
        break;
      case 2: //2
        smsMasivo.stop();
        break;

      default:
        break;
    }
    res.send("accion apply");
  });

  app.listen(puerto, () => {
    console.log(`Running ${puerto}`);
  });
};

const iniciarTarea = () => {
  if (!smsMasivo.running) {
    smsMasivo.start();
    console.log("Sms masivo campana Digital iniciado");
  }
};

module.exports = { iniciarServidor, iniciarTarea };
