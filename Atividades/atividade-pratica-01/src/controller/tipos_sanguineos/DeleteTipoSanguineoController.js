const { prisma } = require('../../database/client.js');

class DeleteTipoSanguineoController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            await prisma.tiposSanguineos.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.status(204).send();
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao deletar tipo sanguíneo.',
                error
            });
        }
    }
}

module.exports = { DeleteTipoSanguineoController };
