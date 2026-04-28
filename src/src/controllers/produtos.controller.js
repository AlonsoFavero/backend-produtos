
const service = require("../services/produtos.service")

async function listarProdutos(req,res){
 try{
   const produtos = await service.listar()

   return res.status(200).json({
        message: "produtos encontrados com sucesso",
        data: produtos
    })
}
catch(error){
  return res.status(500).json({"error": "erro interno do servidor"})
 }

}

async  function buscarProdutoPorId(req, res){
 const {id} = req.params
  
 const produto = await service.buscarPorId(id)

   if(!produto){
    return res.status(404).json({error: "produto não encontrado"})
   }

     return res.status(200).json({
        message: "produto encontrado com sucesso",
        data: produto
    })

}

async function criarProduto(req, res){
    const {nome, preco} = req.body
   
     const novoProduto = await service.criar(nome, preco)

    return res.status(201).json({
        message: "produto criado com sucesso",
        data: novoProduto
    })



}

async function deletarProdutos(req, res){
    const {id} = req.params

    const produto = await service.deletar(id)

    if (!produto) {
        return res.status(404).json({error: "produto não encontrado"})
}

return res.status(200).json({
    message:"produto removido com sucesso"
   })
}

async function atualizarProdutos(req, res) {
    const {id} = req.params
    const {nome, preco} = req.body

    try{
    const produto = await service.atualizar(id, {nome, preco})

    if(!produto) {
        return res.status(404).json({ error: "produto não encontrado"})
    }
   return res.status(200).json({
    message:"produto atualizado com sucesso",
    data: produto
   })

    }catch(erro){
   return res.status(500).json({"error": "erro interno do servidor"})
 }

}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    deletarProdutos,
    atualizarProdutos
}


