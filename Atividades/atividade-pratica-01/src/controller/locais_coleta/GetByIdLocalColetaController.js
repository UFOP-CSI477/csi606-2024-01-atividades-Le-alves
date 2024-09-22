const { prisma } = require('../../database/client.js');

class GetByIdLocalColetaController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const localColeta = await prisma.locaisColeta.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: {
                    cidade: true // Inclui a cidade associada
                }
            });

            if (!localColeta) {
                return response.status(404).json({ message: 'Local de coleta não encontrado.' });
            }

            return response.status(200).json(localColeta);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar local de coleta.',
                error
            });
        }
    }
}

module.exports = { GetByIdLocalColetaController };
