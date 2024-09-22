const { prisma } = require('../../database/client.js');

class DeleteDoacaoController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            await prisma.doacoes.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.status(204).send();
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao deletar doação.',
                error
            });
        }
    }
}

module.exports = { DeleteDoacaoController };
