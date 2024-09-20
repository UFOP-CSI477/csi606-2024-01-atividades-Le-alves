const { Router } = require('express');
const { CreatePessoaController } = require('../controller/pessoas/CreatePessoaController.js');
const { GetAllPessoasController } = require('../controller/pessoas/GetAllPessoasController.js');
const { GetByIdPessoaController } = require('../controller/pessoas/GetByIdPessoaController.js');
const { UpdatePessoaController } = require('../controller/pessoas/UpdatePessoaController.js');
const { DeletePessoaController } = require('../controller/pessoas/DeletePessoaController.js');



const pessoasRouter = Router();

// Criar uma nova pessoa
const createPessoaController = new CreatePessoaController();
pessoasRouter.post('/pessoas', createPessoaController.handle); // A rota POST deve ser /pessoas

// Listar todas as pessoas
const getAllPessoasController = new GetAllPessoasController();
pessoasRouter.get('/pessoas', getAllPessoasController.handle);

// Rota para buscar uma pessoa por ID
const getByIdPessoaController = new GetByIdPessoaController();
pessoasRouter.get('/pessoas/:id', getByIdPessoaController.handle);

// Rota para atualizar uma pessoa por ID
const updatePessoaController = new UpdatePessoaController();
pessoasRouter.put('/pessoas/:id', updatePessoaController.handle);

// Rota para deletar uma pessoa por ID
const deletePessoaController = new DeletePessoaController();
pessoasRouter.delete('/pessoas/:id', deletePessoaController.handle);



module.exports = {pessoasRouter}