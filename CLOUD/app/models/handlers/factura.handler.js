const Factura = require('../models/Factura');

// Crear una función para el llamado a select del modelo
// Envía parámetros req y res
// req significa request = petición
// res significa response = respuesta
const listFactura = async (req, res) => {
    try {
        const facturas = await Factura.getFacturas();
        res.json(facturas); // Convertir a JSON la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertFactura = async (req, res) => {
    try {
        const factura = await Factura.insert(req.body);
        // 201 para crear
        res.status(201).json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateFactura = async (req, res) => {
    try {
        const factura = await Factura.update(req.body, req.params.id);
        // 200 para default
        res.json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.delete(req.params.id);
        res.json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listFactura,
    insertFactura,
    updateFactura,
    deleteFactura,
};
