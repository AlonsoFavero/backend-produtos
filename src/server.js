const express = require("express")
const app = express()

const conectar = require("./database")

app.use(express.json())

conectar()

const produtoRoutes = require("./routes/produtos.routes")

app.use("/produtos", produtoRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})