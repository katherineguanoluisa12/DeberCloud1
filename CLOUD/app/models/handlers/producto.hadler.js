const Producto = require('../models/Producto');

// Crear una función para el llamado a select del modelo
// Envía parámetros req y res
// req significa request = petición
// res significa response = respuesta
const listProducto = async (req, res) => {
    try {
        const productos = await Producto.getProductos();
        res.json(productos); // Convertir a JSON la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertProducto = async (req, res) => {
    try {
        const producto = await Producto.insert(req.body);
        // 201 para crear
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProducto = async (req, res) => {
    try {
        const producto = await Producto.update(req.body, req.params.id);
        // 200 para default
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.delete(req.params.id);
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};
