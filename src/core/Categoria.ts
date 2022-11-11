export default class Categoria {
    #id: string
    #descricao: string

    constructor(id: string, descricao: string){
        this.#id = id
        this.#descricao =descricao
    }

    get id(){
        return this.#id
    }

    get descricao(){
        return this.#descricao
    }
}