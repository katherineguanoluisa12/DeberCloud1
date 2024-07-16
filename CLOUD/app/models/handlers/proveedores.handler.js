const Customer = require('../models/Customer');

//crear una funcion para llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//sec significa response = respuesta
const listProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.getCustomers();
        res.json(proveedores); // convertir a json la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }
}

const insertProveedores = async(req, res) => {
    try{
        const proveedores = await Customer.insert(req.body);
        //201 para crear
        res.status(201).json(proveedores)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const updateProveedores = async(req, res) => {
    try{
        const proveedores = await Customer.update(req.body, req.params.id);
        //200 para default
        res.json(proveedores)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
const deletetProveedores = async(req, res) => {
    try{
        const proveedores = await Customer.delete(req.params.id);
        //201 para crear
        res.json(proveedores)

    } catch (error){
        res.status(500).json ( {error: error.message } );
    } 
}
module.exports = {
    listProveedores,
    insertProveedores,
    updateProveedores,
    deletetProveedores,
};