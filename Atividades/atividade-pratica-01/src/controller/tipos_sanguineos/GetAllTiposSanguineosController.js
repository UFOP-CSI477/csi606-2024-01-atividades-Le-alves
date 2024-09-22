const { prisma } = require('../../database/client.js');

class GetAllTiposSanguineosController {
    async handle(request, response) {
        try {
            const tiposSanguineos = await prisma.tiposSanguineos.findMany();
            return response.status(200).json(tiposSanguineos);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar tipos sanguíneos.',
                error
            });
        }
    }
}

module.exports = { GetAllTiposSanguineosController };
