const express = require("express")
const AutenticacaoMiddleware = require("../../../middleware/autenticacao.middleware")
const AutorizacaoMiddleware = require("../../../middleware/autorizacao.middleware")
const SetorController = require("../controllers/setor.controller")

const router = express.Router()

router.get('/setores/', AutenticacaoMiddleware.autenticarToken, SetorController.listarSetores)

router.get('/setores/:id', AutenticacaoMiddleware.autenticarToken, SetorController.listarSetorPorId)

router.post('/setores/', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), SetorController.criar)

router.put('/setores/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']), SetorController.editar)

router.delete('/setores/:id', AutenticacaoMiddleware.autenticarToken, AutorizacaoMiddleware.autorizar(['admin']),  SetorController.deletarSetorPorId)

module.exports = router