const {smsMasivo} = require('./src/cron/cron-sms') 

if (!smsMasivo.running) {  
  smsMasivo.start();
  console.log('Sms masivo campana Digital iniciado');
}
