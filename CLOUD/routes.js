const express = require('express'); //llamado a framework

//llamar a handlers del api 
const customerHandler = require('./app/models/handlers/customer.handler');

// variable para encapsular rutas
const router = express.Router();


//registar las rutas
//rutas de customer
router.get('/customers',customerHandler.listCustomer) //obtener cliente
router.post('/customers',customerHandler.insertCustomer) //insertar cliente
router.patch('/customers/:id',customerHandler.updateCustomer) //actualizar cliente
router.delete('/customers/:id',customerHandler.deletetCustomer) // elimininar cliente

module.exports = router;