
const produto = require("../models/produto.model")

async function criar(nome, preco){
const novoProduto = await produto.create({nome, preco })
return novoProduto
}

async function listar(){
  const produtos = await produto.find()
  return produtos
}

async function buscarPorId(id){
 const produtoEncontrado = await produto.findById(id)
 return produtoEncontrado
}

async function deletar(id){
  const produtoDeletado = await produto.findByIdAndDelete(id)
  return produtoDeletado
}

async function atualizar (id, dados){
  const produtoAtualizado = await produto.findByIdAndUpdate(
    id,
    dados,
    {new: true}
  )
  return produtoAtualizado
}

module.exports = {
  criar,
  listar,
  buscarPorId, 
  deletar,
  atualizar
}


