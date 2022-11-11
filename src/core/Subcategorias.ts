let dSCategorias = []
let dSCategoria ={} 

const dados = require("../../data/SubCategoria.json")


let jSCategoria = dados.responseBody.records.record.forEach( e => {

  dSCategoria = {
    id : e.CODGRUPOPROD.$,
    descricao : e.DESCRGRUPOPROD.$,
    idPai : e.CODGRUPAI.$
  }

  dSCategorias.push(dSCategoria)
}
)   


export const scategorias  = dSCategorias


export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Categoria = ElementType<typeof scategorias>
