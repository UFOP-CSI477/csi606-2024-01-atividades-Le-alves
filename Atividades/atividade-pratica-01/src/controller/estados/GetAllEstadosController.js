const { prisma } = require('../../database/client.js');

class GetAllEstadosController {
    async handle(request, response) {
        try {
            const estados = await prisma.estados.findMany();
            return response.status(200).json(estados);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar estados.',
                error
            });
        }
    }
}

module.exports = { GetAllEstadosController };
