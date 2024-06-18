const express = require('express');

const interesadosRouter = express.Router();

const interesadosController = require('../controller/interesados');

interesadosRouter.post('/agregar', async (req, res) => {
    console.log("dA ", req.body)
    const insert = await interesadosController.insertInteres(req.body)
    if (insert === undefined) {
        res.json({
            error: 'Error,en le guardado'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: insert
        });
    }
})

module.exports = interesadosRouter;