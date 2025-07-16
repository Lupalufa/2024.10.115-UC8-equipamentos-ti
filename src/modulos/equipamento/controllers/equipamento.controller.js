const EquipamentoModel =  require('../models/equipamento.models')

// Criando a classe do CRUD de notebook

class NotebookController {
    // Função de registro
    static async registrar(req, res){
        try {
            // Corpo para o registro do notebook
            const { equipamento_nome, tipo, numero_patrimonio, usuario_responsavel, status, setorId} = req.body
            // Verificação se todos os campos foram preenchidos
            if( !equipamento_nome || !tipo || !numero_patrimonio || !usuario_responsavel || !status || !setorId ){
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
            }
            // Criando o Notebook com as informações
            const notebook = await EquipamentoModel.create({equipamento_nome, tipo, numero_patrimonio, usuario_responsavel, status, setorId})
            res.status(201).json(notebook)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao cadastrar um novo notebook. Tente novamente mais tarde!", error: error.message})
        }
    }

    static async listarNotebooks(req, res){
        try {
            // Verificando se há notebooks dentro do banco
            const notebook = await EquipamentoModel.findAll()
            // Resposta para caso não tiver nenhum notebook dentro do banco de dados
            if(notebook.length === 0) {
                return res.status(200).json({msg: "Não há nenhum notebook cadastrado"})
            }
            res.status(200).json(notebook)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!", error: error.message})
        }
    }

    static async listarNotebooksPorId(req,res){
        try {
            // Pegando o numero_patrimonio (id do notebook) e verificando se há algum notebook igual ao fornecido.
            const numero_patrimonio = req.params.numero_patrimonio
            const notebook = await EquipamentoModel.findByPk( numero_patrimonio )
            // Verificando se existe o notebook, se caso não tiver. dê uma resposta.
            if(!notebook){
                return res.status(404).json({msg: "Não há esse notebook especifico registrado! Confira as credenciais"})
            }
            res.status(200).json(notebook)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!", error: error.message})
        }
    }

    static async editarNotebook(req, res){
        try {
            // Pegando o numero_patrimonio (id do notebook) e verificando se há algum notebook igual ao fornecido.
            const numero_patrimonio = req.params.numero_patrimonio;
            // Criando o nobo corpo da requisição
            const { equipamento_nome, tipo, usuario_responsavel, status, setorId} = req.body
            // Verificando se todos os campos foram preenchidos
            if(!equipamento_nome || !tipo || !usuario_responsavel || !status || !setorId ) {
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos!"})
            }
            // Atualizando os novos dados do notebook
            const notebookAtualizado = await EquipamentoModel.update(
                {equipamento_nome, tipo, usuario_responsavel, status, setorId},
                // {Where: (...)} ele está pegando especificamente o numero_patrimonio para editar aquele notebook especifico.
                {where: {numero_patrimonio: numero_patrimonio}}
            )
            // Verificando se foi encontrado o notebook para editar, se caso não. resposta.
            if(notebookAtualizado.length === 0){ 
                return res.status(404).json({msg: "Notebook não encontrado!"})
            }
                res.status(200).json(notebookAtualizado)

        } catch (error) {
            res.status(500).json({ msg: "Erro ao editar o novo notebook. Tente novamente mais tarde!", error: error.message})
        }
    }

    static async deletarNotebook(req, res){
        try {
            // Pegando o numero_patrimonio (id do notebook) e verificando se há algum notebook igual ao fornecido.
            const numero_patrimonio = req.params.numero_patrimonio;
            const notebook = await EquipamentoModel.findByPk( numero_patrimonio )
            if (!notebook){
                return res.status(404).json({msg: "Esse notebook não foi encontrado"})
            }
            // Deletando as informações do banco de dados
            await EquipamentoModel.destroy({
                // Where: {...} espeficiamente o notebook fornecido pelo numero_patrimonio
                where: {
                    numero_patrimonio: numero_patrimonio
                }
            })
            res.status(200).json({msg: "Notebook deletado com sucesso!"})
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!", error: error.message})
        }
    }
}

module.exports = NotebookController