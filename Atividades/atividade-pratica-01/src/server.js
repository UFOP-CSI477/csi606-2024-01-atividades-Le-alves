const express = require('express');
const cors = require('cors');
const { pessoasRouter } = require('./routes/pessoas.js'); ;
const { cidadesRouter } = require('./routes/cidades.js');
const { estadosRouter } = require('./routes/estados.js');
const { tiposSanguineosRouter } = require('./routes/tipos_sanguineos.js');

const server = express();
const PORT = 3000; // Usamos a porta 3000 para nosso servidor

// Middleware para permitir JSON e CORS
server.use(express.json());
server.use(cors());

// Usa as rotas de pessoas
server.use('/api', pessoasRouter);

//Usa as rotas de cidades
server.use('/api', cidadesRouter);

//Usa as rotas de estados
server.use('/api', estadosRouter);

//Usa as rotas de tipos Sanguíneos
server.use('/api', tiposSanguineosRouter);

// Rota de teste para garantir que o servidor está rodando
server.get('/', (request, response) => {
  response.json({
    message: 'Status: API de Doação de Sangue está funcionando.'});
});

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`[SERVER] Servidor rodando na porta ${PORT}.`);
});