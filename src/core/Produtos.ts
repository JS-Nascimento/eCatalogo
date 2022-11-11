let dProdutos = []
let dProduto ={} 

const dados = require("../../data/produto.json")


let jSCategoria = dados.responseBody.records.record.forEach( e => {

  dProduto = {
    id : e.CODPROD.$,
    descricao : e.DESCRICAO.$,
    idFamilia : e.CODGRUPOPROD.$,
    embalagem : e.UNIDADE.$,
    ean13 : e.EAN13.$,
    marca : e.MARCA.$,
    preco : e.PRECO.$
    
  }

  dProdutos.push(dProduto)
}
)   


export const produtos  = dProdutos


export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Produto = ElementType<typeof produtos>
