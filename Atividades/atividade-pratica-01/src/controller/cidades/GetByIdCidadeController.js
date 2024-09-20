const { prisma } = require('../../database/client.js');


class GetByIdCidadeController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const cidade = await prisma.cidades.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: {
                    estado: true
                }
            });
            
            if (!cidade) {
                return response.status(404).json({ message: 'Cidade não encontrada.' });
            }

            return response.status(200).json(cidade);

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao buscar cidade.',
                error
            });
        }
    }
}

module.exports = { GetByIdCidadeController };