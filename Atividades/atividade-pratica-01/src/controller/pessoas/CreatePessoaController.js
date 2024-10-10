const { prisma } = require('../../database/client.js');

class CreatePessoaController{

    async handle (request, response){
        const {nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;
        try {
            const pessoa = await prisma.pessoas.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    rg,
                    cidade: {
                        connect: { id: parseInt(cidade_id) }
                    },
                    tipo: {
                        connect: { id: parseInt(tipo_id) }
                    }
                }
            });

            return response.status(201).json(pessoa);
        } catch (error) {
            return response.status(400).json({
                message: 'Erro ao criar pessoa.',
                error
            });
        }
    }
}
module.exports = { CreatePessoaController };