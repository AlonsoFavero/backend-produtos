const fetch = require("node-fetch")

fetch("http://localhost:3000/produtos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nome: "Mouse",
    preco: 50
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(erro))