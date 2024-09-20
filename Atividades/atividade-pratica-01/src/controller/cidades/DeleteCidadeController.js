const { prisma } = require('../../database/client.js');

class DeleteCidadeController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            await prisma.cidades.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.status(204).send(); // 204 No Content

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao deletar cidade.',
                error
            });
        }
    }
}

module.exports = { DeleteCidadeController };
