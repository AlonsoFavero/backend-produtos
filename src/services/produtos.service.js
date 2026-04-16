
const produtos = require("../../data/produtos")

function listar(min,max, nome){

    let resultado = [...produtos]

    if(!isNaN(min)){
       resultado = resultado.filter(p => p.preco >= min)
    }
      if (!isNaN(max)){
        resultado = resultado.filter(p => p.preco <= max)
      }

      if (nome) {
        resultado = resultado.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase())
    )
      }
      return resultado


}