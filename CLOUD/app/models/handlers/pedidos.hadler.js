const Pedido = require('../models/Pedido');

// Crear una función para el llamado a select del modelo
// Envía parámetros req y res
// req significa request = petición
// res significa response = respuesta
const listPedido = async (req, res) => {
    try {
        const pedidos = await Pedido.getPedidos();
        res.json(pedidos); // Convertir a JSON la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertPedido = async (req, res) => {
    try {
        const pedido = await Pedido.insert(req.body);
        // 201 para crear
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePedido = async (req, res) => {
    try {
        const pedido = await Pedido.update(req.body, req.params.id);
        // 200 para default
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletePedido = async (req, res) => {
    try {
        const pedido = await Pedido.delete(req.params.id);
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listPedido,
    insertPedido,
    updatePedido,
    deletePedido,
};
