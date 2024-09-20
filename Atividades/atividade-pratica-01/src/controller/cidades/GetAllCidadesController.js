const { prisma } = require('../../database/client.js');

class GetAllCidadesController {
    async handle(request, response) {
        try {
            const cidades = await prisma.cidades.findMany({
                include: {
                    estado: true
                }
            });
            return response.status(200).json(cidades);

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar cidades.',
                error
            });
        }
    }
}

module.exports = { GetAllCidadesController };
