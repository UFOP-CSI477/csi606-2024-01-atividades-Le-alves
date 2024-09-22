const { Router } = require('express');
const { CreateTipoSanguineoController } = require('../controller/tipos_sanguineos/CreateTipoSanguineoController.js');
const { GetAllTiposSanguineosController } = require('../controller/tipos_sanguineos/GetAllTiposSanguineosController.js');
const { GetByIdTipoSanguineoController } = require('../controller/tipos_sanguineos/GetByIdTipoSanguineoController.js');
const { UpdateTipoSanguineoController } = require('../controller/tipos_sanguineos/UpdateTipoSanguineoController.js');
const { DeleteTipoSanguineoController } = require('../controller/tipos_sanguineos/DeleteTipoSanguineoController.js');

const tiposSanguineosRouter = Router();

// Rotas do CRUD de tipos sanguíneos
const createTipoSanguineoController = new CreateTipoSanguineoController();
tiposSanguineosRouter.post('/tipos_sanguineos', createTipoSanguineoController.handle);

const getAllTiposSanguineosController = new GetAllTiposSanguineosController();
tiposSanguineosRouter.get('/tipos_sanguineos', getAllTiposSanguineosController.handle);

const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
tiposSanguineosRouter.get('/tipos_sanguineos/:id', getByIdTipoSanguineoController.handle);

const updateTipoSanguineoController = new UpdateTipoSanguineoController();
tiposSanguineosRouter.put('/tipos_sanguineos/:id', updateTipoSanguineoController.handle);

const deleteTipoSanguineoController = new DeleteTipoSanguineoController();
tiposSanguineosRouter.delete('/tipos_sanguineos/:id', deleteTipoSanguineoController.handle);

module.exports = { tiposSanguineosRouter };
