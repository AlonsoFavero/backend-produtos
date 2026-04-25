
const service = require("../services/produtos.service")

async function listarProdutos(req,res){
 try{
   const produtos = await service.listar()
    return res.json(produtos)

}catch(erro){
    res.status(500).json({"erro": "erro interno do servidor"})
 }

}

async  function buscarProdutoPorId(req, res){
 const {id} = req.params
  
 const produto = await service.buscarPorId(id)

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado "})
    }

    return res.json(produto)

}

async function criarProduto(req, res){
    const {nome, preco} = req.body
   
     const novoProduto = await service.criar(nome, preco)
      
    return res.status(201).json(novoProduto)

}

async function deletarProdutos(req, res){
    const {id} = req.params

    const produto = await service.deletar(id)

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado "})
    }

    return res.json({ mensagem: "produto removido com sucesso"})
}

async function atualizarProdutos(req, res) {
    const {id} = req.params
    const {nome, preco} = req.body

    try{
    const produto = await service.atualizar(id, {nome, preco})

    if(!produto) {
        return res.status(404).json({ erro: "produto não econtrado"})
    }
    return res.json(produto)

    }catch(erro){
    res.status(500).json({"erro": "erro interno do servidor"})
 }

}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    deletarProdutos,
    atualizarProdutos
}


