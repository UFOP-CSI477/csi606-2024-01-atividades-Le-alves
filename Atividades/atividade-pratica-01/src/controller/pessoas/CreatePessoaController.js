const { prisma } = require('../../database/client.js');

class CreatePessoaController{

    async handle (request, response){
        const {nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        /*
        //Validar se cidade_id existe
        try {
            await prisma.cidades.findFirstOrThrow({
                where: { id: parseInt(cidade_id) }
            });
        } catch (error) {
            return response.status(400).json({
                message: 'Cidade não encontrada.', 
                error
            });
        }
        // Validar se o tipo_id existe
        try {
            await prisma.tiposSanguineos.findFirstOrThrow({
                where: { id: parseInt(tipo_id) }
            });
        } catch (error) {
            return response.status(400).json({
                message: 'Tipo sanguíneo não encontrado.', 
                error
            });
        }

        */
        // Criação da pessoa com a relação de cidade e tipo sanguíneo
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