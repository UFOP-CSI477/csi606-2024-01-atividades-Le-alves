const { prisma } = require('../../database/client.js');

class UpdatePessoaController {

    async handle(request, response) {
        const { id, nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        try {
            // Atualizar a pessoa pelo ID
            const pessoaAtualizada = await prisma.pessoas.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    rg,
                    cidade: {
                        connect: { id: parseInt(cidade_id) } // Conectar cidade (se aplicável)
                    },
                    tipo: {
                        connect: { id: parseInt(tipo_id) } // Conectar tipo sanguíneo (se aplicável)
                    }
                }
            });

            return response.status(200).json(pessoaAtualizada); // Retorna a pessoa atualizada

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao atualizar pessoa.',
                error
            });
        }
    }
}

module.exports = { UpdatePessoaController };
