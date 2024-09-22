const { prisma } = require('../../database/client.js');

class GetByIdTipoSanguineoController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const tipoSanguineo = await prisma.tiposSanguineos.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if (!tipoSanguineo) {
                return response.status(404).json({ message: 'Tipo sanguíneo não encontrado.' });
            }

            return response.status(200).json(tipoSanguineo);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar tipo sanguíneo.',
                error
            });
        }
    }
}

module.exports = { GetByIdTipoSanguineoController };
