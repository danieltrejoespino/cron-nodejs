const cron = require("node-cron");
const axios = require("axios");
const https = require('https');
const {httpsAgent} = require('../config/ssl-config')

// const url = "https://172.20.1.97:3009/api-serv/";
const url = "https://172.20.2.57:3009/api-serv/";

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

const test = cron.schedule('* * * * *', async () => {
  const ruta= url+'testApi'  
  let horaEjecucion = new Date().toLocaleString();  
  try {
    const response = await instance.get(ruta, { httpsAgent });    
    console.log(response.data);    
  } catch (error) {
    console.log(error);
  }
  console.log(`Tarea ejecutada -- ${horaEjecucion}`);
});


// const horario='45 8 * * 1-5'
const smsMasivoDigital = cron.schedule('45 8 * * 1-5', async () => {
  const ruta= url+'testApi'  
  let horaEjecucion = new Date().toLocaleString();  
  try {
    const response = await instance.get(ruta, { httpsAgent });    
    console.log(response.data);    
  } catch (error) {
    console.log(error);
  }
  console.log(`Tarea ejecutada -- ${horaEjecucion}`);
});



const smsMasivoScotiabank24 = cron.schedule('0 22 * * 1-5', async () => {
  const ruta= url+'sendSmsMasivoScotiabank'  
  let horaEjecucion = new Date().toLocaleString();  
  try {
    const params = {
      opcion: 3 //enviamos 160 para hacer pruebas internas
    };

    const response = await instance.get(ruta,{params});    
    console.log(response.data);    
    console.log(`Tarea ejecutada -- ${horaEjecucion}`);
  } catch (error) {
    console.log(error);
  }
});

const smsMasivoScotiabank48 = cron.schedule('0 22 */2 * 1-5', async () => {
  const ruta= url+'sendSmsMasivoScotiabank'  
  let horaEjecucion = new Date().toLocaleString();  
  try {
    const params = {
      opcion: 6
    };

    const response = await instance.get(ruta,{params});    
    console.log(response.data);    
    console.log(`Tarea ejecutada -- ${horaEjecucion}`);
  } catch (error) {
    console.log(error);
  }
});



const asistenciaImpulse = cron.schedule('40 11 * * 1-5', async () => {
  const ruta= url+'assistanceImpulse'  
  let horaEjecucion = new Date().toLocaleString();  
  try { 

    const response = await instance.get(ruta);    
    console.log(response.data);    
    console.log(`Tarea ejecutada -- ${horaEjecucion}`);
  } catch (error) {
    console.log(error);
  }
});


const tasks = {
  smsMasivoDigital,
  smsMasivoScotiabank24,
  smsMasivoScotiabank48,
  test,
  asistenciaImpulse
}

module.exports = tasks
