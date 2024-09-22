const { prisma } = require('../../database/client.js');

class UpdateLocalColetaController {
    async handle(request, response) {
        const { id } = request.params;
        const { nome, rua, numero, complemento, cidade_id } = request.body;

        try {
            const localColeta = await prisma.locaisColeta.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade: {
                        connect: { id: parseInt(cidade_id) }
                    }
                }
            });
            return response.status(200).json(localColeta);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao atualizar local de coleta.',
                error
            });
        }
    }
}

module.exports = { UpdateLocalColetaController };
