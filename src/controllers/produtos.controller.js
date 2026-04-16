const service = require("../services/produtos.service")

function buscarProdutoPorId(req, res){
 
    const id = Number (req.params.id)
    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado "})
    }

    return res.json(produto)

}

function criarProduto(req, res){
 
    const {nome, preco} = req.body
   
    if(!nome || preco === undefined) {
        return res.status(400).json({ erro: "nome e preco são obrigatorios"})
    }
     const novoProduto = service.criar(nome, preco)
      
    return res.status(201).json(novoProduto)

}

function deletarProdutos(req, res){

    const id = Number(req.params.id)
    const ok = service.deletar(id)

    if (!ok){
       return res.status(404).json({erro:"produto não encontrado"})
    }

    return res.json({mensagem: "produto removido"})


}

function listarProdutos(req,res){
 const {min, max, nome} = req.query

 const resultado = service.listar(
    Number(min),
    Number(max),
    nome
 )
 res.json(resultado)
}


module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    deletarProdutos
}


