const { prisma } = require('../../database/client.js');

class DeleteLocalColetaController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            await prisma.locaisColeta.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.status(204).send();
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao deletar local de coleta.',
                error
            });
        }
    }
}

module.exports = { DeleteLocalColetaController };
