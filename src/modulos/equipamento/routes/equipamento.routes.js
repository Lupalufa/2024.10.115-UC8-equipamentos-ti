const express = require('express')
const EquipamentoController = require("../controllers/equipamento.controller")
const AutenticacaoMiddleware = require("../../../middleware/autenticacao.middleware")
const AutorizacaoMiddleware = require("../../../middleware/autorizacao.middleware")

// Criando a instancia de rota com o express
const router = express.Router()

// Rotas para notebook

router.post('/registrar', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), EquipamentoController.registrar)

router.get('/listar', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['colaborador', 'ti', 'admin']), EquipamentoController.listarNotebooks)

router.get('/listar/:numero_patrimonio', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['colaborador', 'ti', 'admin']), EquipamentoController.listarNotebooksPorId)

router.put('/editar/:numero_patrimonio', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), EquipamentoController.editarNotebook)

router.delete('/deletar/:numero_patrimonio', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), EquipamentoController.deletarNotebook)

module.exports = router