const express = require('express')
const NotebookController = require("../controllers/notebook.controller")
const AutenticacaoMiddleware = require("../middleware/notebook.middleware")

const router = express.Router()

router.post('./registrar', AutenticacaoMiddleware.autenticarToken, NotebookController.registrar)

router.get('./listar', AutenticacaoMiddleware.autenticarToken, NotebookController.listarNotebooks)

router.get('./listar/:id', AutenticacaoMiddleware.autenticarToken, NotebookController.listarNotebooksPorId)

router.put('./editar', AutenticacaoMiddleware.autenticarToken, NotebookController.editarNotebook)

router.delete('./deletar/:id', AutenticacaoMiddleware.autenticarToken, NotebookController.deletarNotebook)