const { Router } = require('express');
const { CreateDoacaoController } = require('../controller/doacoes/CreateDoacaoController.js');
const { GetAllDoacoesController } = require('../controller/doacoes/GetAllDoacoesController.js');
const { GetByIdDoacaoController } = require('../controller/doacoes/GetByIdDoacaoController.js');
const { UpdateDoacaoController } = require('../controller/doacoes/UpdateDoacaoController.js');
const { DeleteDoacaoController } = require('../controller/doacoes/DeleteDoacaoController.js');

const doacoesRouter = Router();

// Rotas do CRUD de doações
const createDoacaoController = new CreateDoacaoController();
doacoesRouter.post('/doacoes', createDoacaoController.handle);

const getAllDoacoesController = new GetAllDoacoesController();
doacoesRouter.get('/doacoes', getAllDoacoesController.handle);

const getByIdDoacaoController = new GetByIdDoacaoController();
doacoesRouter.get('/doacoes/:id', getByIdDoacaoController.handle);

const updateDoacaoController = new UpdateDoacaoController();
doacoesRouter.put('/doacoes/:id', updateDoacaoController.handle);

const deleteDoacaoController = new DeleteDoacaoController();
doacoesRouter.delete('/doacoes/:id', deleteDoacaoController.handle);

module.exports = { doacoesRouter };
