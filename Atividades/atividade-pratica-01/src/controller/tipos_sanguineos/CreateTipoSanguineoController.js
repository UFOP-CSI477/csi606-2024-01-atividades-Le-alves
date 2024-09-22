const { prisma } = require('../../database/client.js');

class CreateTipoSanguineoController {
    async handle(request, response) {
        const { tipo, fator } = request.body;

        try {
            const tipoSanguineo = await prisma.tiposSanguineos.create({
                data: {
                    tipo,
                    fator
                }
            });
            return response.status(201).json(tipoSanguineo);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao criar tipo sanguíneo.',
                error
            });
        }
    }
}

module.exports = { CreateTipoSanguineoController };
