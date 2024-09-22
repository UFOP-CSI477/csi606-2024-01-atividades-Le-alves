const { prisma } = require('../../database/client.js');

class UpdateTipoSanguineoController {
    async handle(request, response) {
        const { id } = request.params;
        const { tipo, fator } = request.body;

        try {
            const tipoSanguineo = await prisma.tiposSanguineos.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    tipo,
                    fator
                }
            });
            return response.status(200).json(tipoSanguineo);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao atualizar tipo sanguíneo.',
                error
            });
        }
    }
}

module.exports = { UpdateTipoSanguineoController };
