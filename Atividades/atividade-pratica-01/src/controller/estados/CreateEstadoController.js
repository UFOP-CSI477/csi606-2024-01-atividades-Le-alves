const { prisma } = require('../../database/client.js');

class CreateEstadoController {
    async handle(request, response) {
        const { nome, sigla } = request.body;

        try {
            const estado = await prisma.estados.create({
                data: {
                    nome,
                    sigla
                }
            });
            return response.status(201).json(estado);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao criar estado.',
                error
            });
        }
    }
}

module.exports = { CreateEstadoController };
