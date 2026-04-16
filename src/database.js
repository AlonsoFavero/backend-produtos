const mongoose = require("mongoose")

async function conectar(){

await mongoose.connect("mongodb://127.0.0.1:27017/produtosDB")
console.log("mongoBD conectado")
} 

module.exports = conectar

