const Empleado = require('../models/Empleado');

// Crear una función para el llamado a select del modelo
// Envía parámetros req y res
// req significa request = petición
// res significa response = respuesta
const listEmpleado = async (req, res) => {
    try {
        const empleados = await Empleado.getEmpleados();
        res.json(empleados); // Convertir a JSON la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.insert(req.body);
        // 201 para crear
        res.status(201).json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.update(req.body, req.params.id);
        // 200 para default
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.delete(req.params.id);
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listEmpleado,
    insertEmpleado,
    updateEmpleado,
    deleteEmpleado,
};
