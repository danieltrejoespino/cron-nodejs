const { iniciarServidor, iniciarTarea } = require('./src/app');

const puerto = 3000;

// Iniciar el servidor Express
iniciarServidor(puerto);

// Iniciar la tarea cron
iniciarTarea();