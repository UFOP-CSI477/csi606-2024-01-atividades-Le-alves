const { prisma } = require('../../database/client.js');

class CreateCidadeController {
    async handle(request, response) {
        const { nome, estado_id } = request.body;

        try {
            const cidade = await prisma.cidades.create({
                data: {
                    nome,
                    estado: {
                        connect: { id: parseInt(estado_id) }
                    }
                }
            });
            return response.status(201).json(cidade);

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao criar cidade.',
                error
            });
        }
    }
}

module.exports = { CreateCidadeController };
