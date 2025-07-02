const NotebookModel =  require('../models/notebook.models')

class NotebookController {
    static async criar(req, res){
        try {
            const { equipamento_nome, tipo, numero_patrimonio, usuario_responsavel, status } = req.body
            if( !equipamento_nome || !tipo || !numero_patrimonio || !usuario_responsavel || !status ){
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
            }
            const notebook = await NotebookModel.create({equipamento_nome, tipo, numero_patrimonio, usuario_responsavel, status})
            res.status(201).json(notebook)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao cadastrar um novo notebook. Tente novamente mais tarde!"})
        }
    }

    static async listarNotebooks(req, res){
        try {
            const notebook = await NotebookModel.findAll()
            if(notebook.length === 0) {
                return res.status(200).json({msg: "Não há nenhum notebook cadastrado"})
            }
            res.status(200).json(notebook)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!"})
        }
    }

    static async listarNotebooksPorId(req,res){
        try {
            const numero_patrimonio = req.params.numero_patrimonio
            const notebook = await NotebookModel.findByPk({ numero_patrimonio })
            if(!notebook){
                return res.status(404).json({msg: "Não há esse notebook especifico registrado! Confira as credenciais"})
            }
            res.status(200).json(notebook)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!"})
        }
    }

    static async editarNotebook(req, res){
        try {
            const numero_patrimonio = req.params.numero_patrimonio;
            const { equipamento_nome, tipo, usuario_responsavel, status} = req.body
            if(!equipamento_nome || !tipo || !usuario_responsavel || !status ) {
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos!"})
            }
            const notebookAtualizado = await NotebookModel.update(
                {equipamento_nome: equipamento_nome, tipo: tipo, usuario_responsavel: usuario_responsavel, status: status},
                {where: {numero_patrimonio: numero_patrimonio}}
            )
            if(notebookAtualizado.length === 0){ 
                return res.status(404).json({msg: "Notebook não encontrado!"})
            }
            res.status(200).json(notebookAtualizado)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!"})
        }
    }

    static async deletarNotebook(req, res){
        try {
            const numero_patrimonio = req.params.numero_patrimonio;
            const notebook = await NotebookModel.findByPk({ numero_patrimonio })
            if (!notebook){
                return res.status(404).json({msg: "Esse notebook não foi encontrado"})
            }
            await NotebookModel.destroy({
                where: {
                    numero_patrimonio: numero_patrimonio
                }
            })
            res.status(200).json({msg: "Notebook deletado com sucesso!"})
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar um novo notebook. Tente novamente mais tarde!"})
        }
    }
}