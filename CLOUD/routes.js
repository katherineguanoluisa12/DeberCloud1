const express = require('express'); //llamado a framework

// Llamar a handlers del api 
const customerHandler = require('./app/models/handlers/customer.handler');
const proveedorHandler = require('./app/models/handlers/proveedor.handler');
const productoHandler = require('./app/models/handlers/producto.handler');
const pedidoHandler = require('./app/models/handlers/pedido.handler');
const facturaHandler = require('./app/models/handlers/factura.handler');
const empleadoHandler = require('./app/models/handlers/empleado.handler');

// Variable para encapsular rutas
const router = express.Router();

// Registrar las rutas
// Rutas de customer
router.get('/customers', customerHandler.listCustomer); // Obtener clientes
router.post('/customers', customerHandler.insertCustomer); // Insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer); // Actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer); // Eliminar cliente

// Rutas de proveedor
router.get('/proveedores', proveedorHandler.listProveedor); // Obtener proveedores
router.post('/proveedores', proveedorHandler.insertProveedor); // Insertar proveedor
router.patch('/proveedores/:id', proveedorHandler.updateProveedor); // Actualizar proveedor
router.delete('/proveedores/:id', proveedorHandler.deleteProveedor); // Eliminar proveedor

// Rutas de producto
router.get('/productos', productoHandler.listProducto); // Obtener productos
router.post('/productos', productoHandler.insertProducto); // Insertar producto
router.patch('/productos/:id', productoHandler.updateProducto); // Actualizar producto
router.delete('/productos/:id', productoHandler.deleteProducto); // Eliminar producto

// Rutas de pedido
router.get('/pedidos', pedidoHandler.listPedido); // Obtener pedidos
router.post('/pedidos', pedidoHandler.insertPedido); // Insertar pedido
router.patch('/pedidos/:id', pedidoHandler.updatePedido); // Actualizar pedido
router.delete('/pedidos/:id', pedidoHandler.deletePedido); // Eliminar pedido

// Rutas de factura
router.get('/facturas', facturaHandler.listFactura); // Obtener facturas
router.post('/facturas', facturaHandler.insertFactura); // Insertar factura
router.patch('/facturas/:id', facturaHandler.updateFactura); // Actualizar factura
router.delete('/facturas/:id', facturaHandler.deleteFactura); // Eliminar factura

// Rutas de empleado
router.get('/empleados', empleadoHandler.listEmpleado); // Obtener empleados
router.post('/empleados', empleadoHandler.insertEmpleado); // Insertar empleado
router.patch('/empleados/:id', empleadoHandler.updateEmpleado); // Actualizar empleado
router.delete('/empleados/:id', empleadoHandler.deleteEmpleado); // Eliminar empleado

module.exports = router;
