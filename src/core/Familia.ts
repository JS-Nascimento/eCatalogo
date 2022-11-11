export default class Familia {
    #id: string
    #descricao: string
    #idPai : string

    constructor(id: string, descricao: string, idPai : string){
        this.#id = id
        this.#descricao =descricao
        this.#idPai = idPai
    }

    get id(){
        return this.#id
    }

    get descricao(){
        return this.#descricao
    }

    get idPai(){
            return this.#idPai
    }
}