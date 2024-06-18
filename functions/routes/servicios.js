const express = require('express');

const serviciosRouter = express.Router();

const serviciosController = require('../controller/servicios');

serviciosRouter.get('/all', async (req, res) => {
    const services = await serviciosController.getServices()
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

serviciosRouter.get('/contactos', async (req, res) => {
    const contacto = await serviciosController.getContacto()
    if (contacto === undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: contacto
        });
    }
})  

serviciosRouter.get('/services-socios', async (req, res) => {

        const services = await serviciosController.getServiciosSocios()
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

serviciosRouter.get('/services-codigo-pais', async (req, res) => {
    const services = await serviciosController.getCodigoPais()
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

serviciosRouter.get('/carga/:id', (req, res) => {
    return res.status(200).send({ message:  `Mensaje de respuesta User ${req.params.id}` })
})  

module.exports = serviciosRouter;