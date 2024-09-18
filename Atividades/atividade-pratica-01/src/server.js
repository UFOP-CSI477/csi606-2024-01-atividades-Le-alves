const express = require('express');
const cors = require('cors');
const { pessoasRouter } = require('./routes/pessoas.js'); ;

const server = express();
const PORT = 3000; // Usamos a porta 3000 para nosso servidor

// Middleware para permitir JSON e CORS
server.use(express.json());
server.use(cors());

// Usar as rotas de pessoas
server.use('/api', pessoasRouter);

// Rota de teste para garantir que o servidor está rodando
server.get('/', (request, response) => {
  response.json({
    message: 'Status: API de Doação de Sangue está funcionando.'});
});

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`[SERVER] Servidor rodando na porta ${PORT}.`);
});