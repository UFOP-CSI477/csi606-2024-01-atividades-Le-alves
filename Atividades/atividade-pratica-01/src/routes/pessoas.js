const { Router } = require('express');
const { CreatePessoaController } = require('../controller/pessoas/CreatePessoaController.js');

const pessoasRouter = Router();

// Criar uma nova pessoa
const createPessoaController = new CreatePessoaController();
pessoasRouter.post('/pessoas', createPessoaController.handle); // A rota POST deve ser /pessoas

module.exports = {pessoasRouter}