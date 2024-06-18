const express = require('express');

const portafolioRouter = express.Router();

const portafolioController = require('../controller/portafolio');

portafolioRouter.get('/all', async (req, res) => {
    const services = await portafolioController.getPortafolio()
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

portafolioRouter.get('/services-socios', async (req, res) => {

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

portafolioRouter.get('/services-codigo-pais', async (req, res) => {
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

portafolioRouter.get('/carga/:id', (req, res) => {
    return res.status(200).send({ message:  `Mensaje de respuesta User ${req.params.id}` })
})  

module.exports = portafolioRouter;