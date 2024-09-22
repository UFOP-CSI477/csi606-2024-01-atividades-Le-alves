const { prisma } = require('../../database/client.js');

class DeleteEstadoController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            await prisma.estados.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.status(204).send();
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao deletar estado.',
                error
            });
        }
    }
}

module.exports = { DeleteEstadoController };
