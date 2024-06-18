const express = require('express');
const multer = require('multer');
const { uploadImage } = require('../firebase');

const comercioRouter = express.Router();

const upload = multer({
    dest: './upload'
})

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})

const comercioController = require('../controller/comercio');

//AREA DE CARGA DE IMAGENES
comercioRouter.post('/upload_profile', mul.single('image'), uploadImage, async (req, res) => {
    const url = {
        url: req.file.firebaseUrl,
        id_photo: req.body.id_photo
    }

    res.status(200).json({
        message: 'IMAGE UPLOADED SUCCESSFULLY',
        result: url
    })
})



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