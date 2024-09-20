const { prisma } = require('../../database/client.js');

class GetByIdPessoaController {

    async handle(request, response) {
        const { id } = request.params;

        try {
            // Buscar a pessoa por ID
            const pessoa = await prisma.pessoas.findFirstOrThrow({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(pessoa);

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar pessoa.',
                error
            });
        }
    }
}

module.exports = { GetByIdPessoaController };
