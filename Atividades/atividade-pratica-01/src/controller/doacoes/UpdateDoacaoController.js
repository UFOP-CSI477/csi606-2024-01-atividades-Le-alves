const { prisma } = require('../../database/client.js');

class UpdateDoacaoController {
    async handle(request, response) {
        const { id } = request.params;
        const { pessoa_id, local_id, data } = request.body;

        try {
            const doacao = await prisma.doacoes.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    pessoa: {
                        connect: { id: parseInt(pessoa_id) }
                    },
                    local: {
                        connect: { id: parseInt(local_id) }
                    },
                    data: new Date(data)
                }
            });
            return response.status(200).json(doacao);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao atualizar doação.',
                error
            });
        }
    }
}

module.exports = { UpdateDoacaoController };
