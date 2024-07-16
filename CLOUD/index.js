const express = require('express');
const knex  = require('./db'); //llamado a conf db
const routes = require('./routes'); // llamado rutas


const app = express(); // creamos una nueva instancia
const port = 3000; // puerto de salida

app.use(express.json()); //configura tipo de dato json

app.use('/api', routes); // configura la url base y rutas

app.listen(port, () =>{  // ejecuta la api por el puerto 300
    //luego de ejecutar imprime un mnesaje
    console.log(`Servidor corriendo en el puerto ${port}`)
})


