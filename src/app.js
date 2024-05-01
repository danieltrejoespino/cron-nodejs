delete require.cache[require.resolve("./cron/cron-sms")];

const tasks = require("./cron/cron-sms");


const startTasks = () => {
  if (!tasks.smsMasivoDigital.running) {
    tasks.smsMasivoDigital.start();
    console.log("Sms masivo campana Digital iniciado");
  }
  if (!tasks.smsMasivoScotiabank24.running) {
    tasks.smsMasivoScotiabank24.start();
    console.log("Sms masivo campana Scotiabank iniciado");
  }
  if (!tasks.smsMasivoScotiabank48.running) {
    tasks.smsMasivoScotiabank48.start();
    console.log("Sms masivo campana Scotiabank iniciado");
  }
};
// const startTasks = () => {
//   if (!tasks.test.running) {
//     tasks.test.start();
//     console.log("Cron de prueba iniciado");
//   } 
// };

module.exports = {startTasks };
