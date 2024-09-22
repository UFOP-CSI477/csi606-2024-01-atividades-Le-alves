const { prisma } = require('../../database/client.js');

class GetByIdDoacaoController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const doacao = await prisma.doacoes.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: {
                    pessoa: true,
                    local: true
                }
            });

            if (!doacao) {
                return response.status(404).json({ message: 'Doação não encontrada.' });
            }

            return response.status(200).json(doacao);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar doação.',
                error
            });
        }
    }
}

module.exports = { GetByIdDoacaoController };
