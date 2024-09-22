const { Router } = require('express');
const { CreateEstadoController } = require('../controller/estados/CreateEstadoController.js');
const { GetAllEstadosController } = require('../controller/estados/GetAllEstadosController.js');
const { GetByIdEstadoController } = require('../controller/estados/GetByIdEstadoController.js');
const { UpdateEstadoController } = require('../controller/estados/UpdateEstadoController.js');
const { DeleteEstadoController } = require('../controller/estados/DeleteEstadoController.js');

const estadosRouter = Router();

// Rotas do CRUD de estados
const createEstadoController = new CreateEstadoController();
estadosRouter.post('/estados', createEstadoController.handle);

const getAllEstadosController = new GetAllEstadosController();
estadosRouter.get('/estados', getAllEstadosController.handle);

const getByIdEstadoController = new GetByIdEstadoController();
estadosRouter.get('/estados/:id', getByIdEstadoController.handle);

const updateEstadoController = new UpdateEstadoController();
estadosRouter.put('/estados/:id', updateEstadoController.handle);

const deleteEstadoController = new DeleteEstadoController();
estadosRouter.delete('/estados/:id', deleteEstadoController.handle);

module.exports = { estadosRouter };