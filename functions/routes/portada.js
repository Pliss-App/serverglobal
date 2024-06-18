const express = require('express');

const portadaRouter = express.Router();

const portadaController = require('../controller/portada');

portadaRouter.get('/:portada', async (req, res) => {
    const services = await portadaController.getPortada(req.params.portada);
    if (services === undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: services
        });
    }
})  


portadaRouter.get('/:portada', async (req, res) => {
    const services = await portadaController.getPortada(req.params.portada);
    if (services === undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: services
        });
    }
})  
portadaRouter.get('/carga/:id', (req, res) => {
    return res.status(200).send({ message:  `Mensaje de respuesta User ${req.params.id}` })
})  

module.exports = portadaRouter;