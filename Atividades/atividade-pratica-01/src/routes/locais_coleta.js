const { Router } = require('express');
const { CreateLocalColetaController } = require('../controller/locais_coleta/CreateLocalColetaController.js');
const { GetAllLocaisColetaController } = require('../controller/locais_coleta/GetAllLocaisColetaController.js');
const { GetByIdLocalColetaController } = require('../controller/locais_coleta/GetByIdLocalColetaController.js');
const { UpdateLocalColetaController } = require('../controller/locais_coleta/UpdateLocalColetaController.js');
const { DeleteLocalColetaController } = require('../controller/locais_coleta/DeleteLocalColetaController.js');

const locaisColetaRouter = Router();

// Rotas do CRUD de locais de coleta
const createLocalColetaController = new CreateLocalColetaController();
locaisColetaRouter.post('/locais_coleta', createLocalColetaController.handle);

const getAllLocaisColetaController = new GetAllLocaisColetaController();
locaisColetaRouter.get('/locais_coleta', getAllLocaisColetaController.handle);

const getByIdLocalColetaController = new GetByIdLocalColetaController();
locaisColetaRouter.get('/locais_coleta/:id', getByIdLocalColetaController.handle);

const updateLocalColetaController = new UpdateLocalColetaController();
locaisColetaRouter.put('/locais_coleta/:id', updateLocalColetaController.handle);

const deleteLocalColetaController = new DeleteLocalColetaController();
locaisColetaRouter.delete('/locais_coleta/:id', deleteLocalColetaController.handle);

module.exports = { locaisColetaRouter };
