const { prisma } = require('../../database/client.js');

class DeletePessoaController {

    async handle(request, response) {
        const { id } = request.params; // O ID da pessoa vem nos parâmetros da URL

        try {
            // Tentar deletar a pessoa pelo ID
            await prisma.pessoas.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.status(204).send(); // Retorna status 204 (No Content) em caso de sucesso

        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao deletar pessoa.',
                error
            });
        }
    }
}

module.exports = { DeletePessoaController };
