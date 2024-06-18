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

usuarioRouter.post('/register-device', (req, res) => {
    const deviceInfo = req.body;
  
    // Guardar la información del dispositivo en un archivo (puede ser una base de datos)
    fs.appendFile('devices.log', JSON.stringify(deviceInfo) + '\n', (err) => {
      if (err) {
        console.error('Error al guardar la información del dispositivo', err);
        res.status(500).send('Error al guardar la información del dispositivo');
      } else {
        res.send('Información del dispositivo registrada con éxito');
      }
    });
  });



usuarioRouter.get('/carga/:id', (req, res) => {
    return res.status(200).send({ message:  `Mensaje de respuesta User ${req.params.id}` })
})  

module.exports = usuarioRouter;