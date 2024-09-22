const { prisma } = require('../../database/client.js');

class GetAllDoacoesController {
    async handle(request, response) {
        try {
            const doacoes = await prisma.doacoes.findMany({
                include: {
                    pessoa: true,
                    local: true
                }
            });
            return response.status(200).json(doacoes);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar doações.',
                error
            });
        }
    }
}

module.exports = { GetAllDoacoesController };
