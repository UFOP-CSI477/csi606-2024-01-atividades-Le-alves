const { prisma } = require('../../database/client.js');

class CreateLocalColetaController {
    async handle(request, response) {
        const { nome, rua, numero, complemento, cidade_id } = request.body;

        try {
            const localColeta = await prisma.locaisColeta.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade: {
                        connect: { id: parseInt(cidade_id) } // Conecta à cidade
                    }
                }
            });
            return response.status(201).json(localColeta);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao criar local de coleta.',
                error
            });
        }
    }
}

module.exports = { CreateLocalColetaController };
