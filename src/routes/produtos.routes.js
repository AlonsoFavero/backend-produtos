const { Router } = require("express")

const {
    listarProdutos,
    criarProduto,
    deletarProdutos,
    buscarProdutoPorId,
    atualizarProdutos
} = require("../controllers/produtos.controller")

const {
    validarProdutos,
    validarId
} = require("../middlewares/validarProdutos.middleware")

const router = Router()

router.delete("/:id", validarId, deletarProdutos)

router.post("/", validarProdutos, criarProduto)

router.get("/:id", validarId, buscarProdutoPorId)

router.get("/", listarProdutos)

router.put("/:id", validarId, validarProdutos, atualizarProdutos)

module.exports = router

