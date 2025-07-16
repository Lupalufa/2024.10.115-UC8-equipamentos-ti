const SetorModel = require("../models/setor.model")

class SetorController {
    static async criar(req, res) {
        try {
            const { id, nome, descricao } = req.body
            if(!nome){
                return res.status(400).json({msg: "O campo obrigatorio deve ser preenchido"})
            }

            const setor = SetorModel.create({id, nome, descricao})
            res.status(201).json({msg: "Setor cadastrado com sucesso"})
        } catch (error) {
            res.status(500).json({msg: "Erro ao cadastrar um novo setor", error: error.message})
        }
    }

    static async editar(req, res) {
        try {
            const id = req.params.id
            const {nome, descricao} = req.body
            if(!nome || !descricao) {
                return res.status(400).json({msg: "Os campos devem ser preenchidos"})
            }
            const setorAtualizado = await SetorModel.update({nome, descricao},{
                where: {id: id}
            })
            if(setorAtualizado.length === 0){
                return res.status(404).json({msg: "Não foi possível encontrar o setor especifico"})
            }
            res.status(200).json(setorAtualizado)
        } catch (error) {
            res.status(500).json({msg: "Erro ao editar um setor especifico", error: error.message})
        }
    }

    static async listarSetores(req, res) {
        try {
            const setor = await SetorModel.findAll()
            if(setor.length === 0) {
                return res.status(200).json({msg: "Não há nenhum setor cadastrado"})
            }
            res.status(200).json(setor)
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar todos os setores", error: error.message})
        }
    }

    static async listarSetorPorId(req, res) {
        try {
            const id = req.params.id
            const setor = await SetorModel.findByPk(id)
            if(!setor){
                return res.status(404).json({msg: "Não há esse setor cadastrado"})
            }
            res.status(200).json(setor)
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar um setor especifico", error: error.message})
        }
    }

    static async deletarSetorPorId(req, res) {
        try {
            const id = req.params.id
            const setor = await SetorModel.findByPk(id)
            if(!setor){
                return res.status(404).json({msg: "Não há esse setor cadastrado! verificar credênciais"})
            }
            await SetorModel.destroy({where: {id: id}})
            res.status(200).json({msg: "Setor deletado com sucesso"})
        } catch (error) {
            res.status(500).json({msg: "Erro ao deletar um setor", error: error.message})
        }
    }
}

module.exports = SetorController
