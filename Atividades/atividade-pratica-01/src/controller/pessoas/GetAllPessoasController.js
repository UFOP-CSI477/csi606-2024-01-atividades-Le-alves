const { prisma } = require('../../database/client.js'); 

class GetAllPessoasController {

    async handle(request, response) { 
        try {
            const pessoas = await prisma.pessoas.findMany();
            return response.status(200).json(pessoas); 
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar pessoas.',
                error
            });
        }
    }
}

module.exports = { GetAllPessoasController };