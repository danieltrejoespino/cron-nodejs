const cron = require("node-cron");
const axios = require("axios");
const https = require("https");
const fs = require('fs')
const path = require('path');  // socket io

const sslDirectory = path.resolve(__dirname, '..', 'ssl');
const privateKeyPath = path.join(sslDirectory, 'clave-privada.pem');
const certificatePath = path.join(sslDirectory, 'certificado.pem');

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');

const horaEjecucion = new Date().toLocaleString();

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Deshabilitar la verificación del cliente
  cert: certificate,
  key: privateKey,
  passphrase: "test"
});


const url = "https://172.20.2.57:3009/api-serv/";

// correr de lunes a viernes a las 8 ----> '0 8 * * 1-5'

const smsMasivo = cron.schedule("* * * * *", async () => {
  const ruta= url+'testApi'
  
  console.log(`Tarea ejecutada -- ${horaEjecucion}` );
  try {  
    const response = await axios.get(ruta,{ httpsAgent });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
});



 module.exports = {
  smsMasivo
 }

