const https = require("https");
const fs = require("fs");
const path = require("path"); // socket io

const sslDirectory = path.resolve(__dirname, "..", "ssl");
const privateKeyPath = path.join(sslDirectory, "clave-privada.pem");
const certificatePath = path.join(sslDirectory, "certificado.pem");

const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const certificate = fs.readFileSync(certificatePath, "utf8");


const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Deshabilitar la verificación del cliente
  cert: certificate,
  key: privateKey,
  passphrase: "test",
});


module.exports = {
  httpsAgent
}