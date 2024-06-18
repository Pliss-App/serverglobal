const express = require('express');
const fs = require('fs');

const usuarioRouter = express.Router();

const userController = require('../controller/usuario');

usuarioRouter.get('/services', async (req, res) => {
    const services = await userController.getServices()
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

let devices = {};

usuarioRouter.post('/register-device', async (req, res) => {
    const { deviceId, deviceInfo } = req.body;
    const conteo = await userController.getIdDispositivo(deviceId);

    if (conteo === undefined) {
        devices[deviceId] = {
            info: deviceInfo
        };

        const services = await userController.addDispositivo(deviceId, JSON.stringify(devices[deviceId]), 1)
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
    } else {
        conteo.visitas += 1;
        
        const update = await userController.updateDispositivo(deviceId,  conteo.visitas)
        if (update  === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: update 
            });
        }
    }
});


usuarioRouter.get('/carga/:id', (req, res) => {
    return res.status(200).send({ message: `Mensaje de respuesta User ${req.params.id}` })
})

module.exports = usuarioRouter;