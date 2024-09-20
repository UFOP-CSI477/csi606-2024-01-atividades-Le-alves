const { Router } = require('express');
const { CreateCidadeController } = require('../controller/cidades/CreateCidadeController.js');
const { GetAllCidadesController } = require('../controller/cidades/GetAllCidadesController.js');
const { GetByIdCidadeController } = require('../controller/cidades/GetByIdCidadeController.js');
const { UpdateCidadeController } = require('../controller/cidades/UpdateCidadeController.js');
const { DeleteCidadeController } = require('../controller/cidades/DeleteCidadeController.js');

const cidadesRouter = Router();

// Rotas do CRUD de cidades
const createCidadeController = new CreateCidadeController();
cidadesRouter.post('/cidades', createCidadeController.handle);

const getAllCidadesController = new GetAllCidadesController();
cidadesRouter.get('/cidades', getAllCidadesController.handle);

const getByIdCidadeController = new GetByIdCidadeController();
cidadesRouter.get('/cidades/:id', getByIdCidadeController.handle);

const updateCidadeController = new UpdateCidadeController();
cidadesRouter.put('/cidades/:id', updateCidadeController.handle);

const deleteCidadeController = new DeleteCidadeController();
cidadesRouter.delete('/cidades/:id', deleteCidadeController.handle);

module.exports = { cidadesRouter };