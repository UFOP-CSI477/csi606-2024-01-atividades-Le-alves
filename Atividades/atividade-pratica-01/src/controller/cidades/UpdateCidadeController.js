const { prisma } = require('../../database/client.js');

class UpdateCidadeController {
    async handle(request, response) {
        const { id } = request.params;
        const { nome, estado_id } = request.body;

        try {
            const cidade = await prisma.cidades.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    estado: {
                        connect: { id: parseInt(estado_id) }
                    }
                }
            });
            return response.status(200).json(cidade);

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao atualizar cidade.',
                error
            });
        }
    }
}

module.exports = { UpdateCidadeController };
