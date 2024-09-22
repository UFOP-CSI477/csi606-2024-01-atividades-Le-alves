const { prisma } = require('../../database/client.js');

class GetByIdEstadoController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const estado = await prisma.estados.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if (!estado) {
                return response.status(404).json({ message: 'Estado não encontrado.' });
            }

            return response.status(200).json(estado);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar estado.',
                error
            });
        }
    }
}

module.exports = { GetByIdEstadoController };
