const { prisma } = require('../../database/client.js');

class UpdateEstadoController {
    async handle(request, response) {
        const { id } = request.params;
        const { nome, sigla } = request.body;

        try {
            const estado = await prisma.estados.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    sigla
                }
            });
            return response.status(200).json(estado);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao atualizar estado.',
                error
            });
        }
    }
}

module.exports = { UpdateEstadoController };
