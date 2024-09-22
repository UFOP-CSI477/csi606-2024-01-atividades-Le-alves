const { prisma } = require('../../database/client.js');

class CreateDoacaoController {
    async handle(request, response) {
        const { pessoa_id, local_id, data } = request.body;

        try {
            const doacao = await prisma.doacoes.create({
                data: {
                    pessoa: {
                        connect: { id: parseInt(pessoa_id) }
                    },
                    local: {
                        connect: { id: parseInt(local_id) }
                    },
                    data: new Date(data) // Converte a string para um objeto Date
                }
            });
            return response.status(201).json(doacao);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao criar doação.',
                error
            });
        }
    }
}

module.exports = { CreateDoacaoController };
