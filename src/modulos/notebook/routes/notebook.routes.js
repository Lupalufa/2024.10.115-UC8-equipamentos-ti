const express = require('express')
const NotebookController = require("../controllers/notebook.controller")
const AutenticacaoMiddleware = require("../middleware/notebook.middleware")

// Criando a instancia de rota com o express
const router = express.Router()

// Rotas para notebook

router.post('/registrar', AutenticacaoMiddleware.autenticarToken, NotebookController.registrar)

router.get('/listar', AutenticacaoMiddleware.autenticarToken, NotebookController.listarNotebooks)

router.get('/listar/:numero_patrimonio', AutenticacaoMiddleware.autenticarToken, NotebookController.listarNotebooksPorId)

router.put('/editar/:numero_patrimonio', AutenticacaoMiddleware.autenticarToken, NotebookController.editarNotebook)

router.delete('/deletar/:numero_patrimonio', AutenticacaoMiddleware.autenticarToken, NotebookController.deletarNotebook)

module.exports = router