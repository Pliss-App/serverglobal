const express = require('express');
const multer = require('multer');

const comercioRouter = express.Router();

const upload = multer({
    dest: './upload'
})

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})

const comercioController = require('../controller/comercio');


comercioRouter.get('/nosotros', async (req, res) => {

    const result = await comercioController.getComercio();
    if (result === undefined) {
        res.json({
            msg: 'Sin Resultados',
        })
    }else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: result
        }); 
    }
})




module.exports = comercioRouter;