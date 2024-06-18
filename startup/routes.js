const express = require('express');
const indexRouter = require('../routes/index');
const usuarioRouter = require('../routes/usuario');
const comercioRouter = require('../routes/comercio');
const serviciosRouter = require('../routes/servicios');
const portadaRouter = require('../routes/portada');
const portafolioRouter = require('../routes/portafolio');
const interesadosRouter = require('../routes/interesados');

//ADMINISTRADOR
const adminMenuRouter = require('../routes/administrador/menu')


const apiRouter = express.Router();

//router ADMINISTRADOR
apiRouter.use('/admin', adminMenuRouter);

//ROUTER USER

apiRouter.use('/init', indexRouter);
apiRouter.use('/user', usuarioRouter);
apiRouter.use('/servicios', serviciosRouter);
apiRouter.use('/portada', portadaRouter);
apiRouter.use('/interesados', interesadosRouter);
apiRouter.use('/portafolio', portafolioRouter);
apiRouter.use('/comercio', comercioRouter);

module.exports = apiRouter;