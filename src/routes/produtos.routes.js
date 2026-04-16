const { Router } = require("express")
const {listarProdutos, criarProduto, deletarProdutos, buscarProdutoPorId} = require("../controllers/produtos.controller")
const router = Router()

router.delete("/produtos/:id", deletarProdutos)

router.post("/produtos", criarProduto)

router.get("/produtos/:id", buscarProdutoPorId)

router.get("/produtos", listarProdutos)

module.exports = router

