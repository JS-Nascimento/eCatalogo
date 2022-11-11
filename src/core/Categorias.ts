

let dCategorias = []
let dCategoria ={} 

const dados = require("../../data/categorias.json")


let jCategoria = dados.responseBody.records.record.forEach( e => {

  dCategoria = {
    id : e.CODGRUPOPROD.V,
    descricao : e.DESCRGRUPOPROD.V
  }

  dCategorias.push(dCategoria)
}
)   


export const categorias  = dCategorias


export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Categoria = ElementType<typeof categorias>
