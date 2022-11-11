let dFamilias = []
let dFamilia ={} 

const dados = require("../../data/familia.json")


let jFamilia = dados.responseBody.records.record.forEach( e => {

  dFamilia = {
    id : e.CODGRUPOPROD.$,
    descricao : e.DESCRGRUPOPROD.$,
    idPai : e.CODGRUPAI.$
  }

  dFamilias.push(dFamilia)
}
)   


export const familias  = dFamilias


export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type familia = ElementType<typeof familias>
