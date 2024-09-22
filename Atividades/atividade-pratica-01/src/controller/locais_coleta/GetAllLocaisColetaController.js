const { prisma } = require('../../database/client.js');

class GetAllLocaisColetaController {
    async handle(request, response) {
        try {
            const locaisColeta = await prisma.locaisColeta.findMany({
                include: {
                    cidade: true // Inclui a cidade associada
                }
            });
            return response.status(200).json(locaisColeta);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar locais de coleta.',
                error
            });
        }
    }
}

module.exports = { GetAllLocaisColetaController };
