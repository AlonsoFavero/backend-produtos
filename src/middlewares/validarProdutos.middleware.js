const mongoose = require("mongoose")

function validarProdutos(req, res, next){

    const {nome, preco} = req.body
   
    if((!nome || typeof nome !== 'string' || nome.trim().length === 0 || preco === undefined || typeof preco !== 'number' || preco <= 0)) {
        return res.status(400).json({ erro: "nome e preco são obrigatorios"})
    }
    next()
}

function validarId(req, res, next) {
const {id} = req.params

if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ erro: "id invalido"})
}
    next()
}

module.exports = {validarProdutos, validarId}