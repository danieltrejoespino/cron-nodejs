const cron = require("node-cron");
const axios = require("axios");


const {httpsAgent} = require('../config/ssl-config')


// const url = "https://172.20.1.97:3009/api-serv/";
const url = "https://172.20.2.57:3009/api-serv/";


const horario='* * * * *'
// const horario='45 8 * * 1-5'
const smsMasivoDigital = cron.schedule(horario, async () => {
  const ruta= url+'testApi'  
  let horaEjecucion = new Date().toLocaleString();  
  try {
    const response = await axios.get(ruta, { httpsAgent });
    
    console.log(response.data);
    
  } catch (error) {
    console.log(error);
  }

  console.log(`Tarea ejecutada -- ${horaEjecucion}`);
});


module.exports = {
  smsMasivoDigital,
}
