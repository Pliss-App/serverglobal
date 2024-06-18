const express = require('express');

const menuRouter = express.Router();

const menuController = require('../../controller/administrador/menu');

menuRouter.get('/all', async (req, res) => {
    const menu = await menuController.getMenu();
    if (menu=== undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: menu
        });
    }
})  

menuRouter.get('/listado/:opcion', async (req, res) => {
    const menu = await menuController.getOpcionMenu(req.params.opcion);
    if (menu=== undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: menu
        });
    }
})  

menuRouter.get('/portada/:id', async (req, res) => {
    const portada = await menuController.getPortadaId(req.params.id)
    if (portada === undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: portada
        });
    }
})  

menuRouter.get('/gestion/:tabla/:id', async (req, res) => {
    const portada = await menuController.getOpcionTableId(req.params.tabla,req.params.id)
    if (portada === undefined) {
        res.json({
            error: 'Error, Datos no encontrados'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: portada
        });
    }
})  


menuRouter.get('/carga/:id', (req, res) => {
    return res.status(200).send({ message:  `Mensaje de respuesta User ${req.params.id}` })
})  

module.exports = menuRouter;