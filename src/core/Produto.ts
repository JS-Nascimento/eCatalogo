export default class Produto {
    #id: string
    #descricao: string
    #idFamilia : string
    #embalagem : string
    #ean13 : string
    #marca : string
    #preco : number

    constructor(id: string, descricao: string, idFamilia: string, embalagem: string,
                 ean13: string, marca: string, preco: number){
        this.#id = id
        this.#descricao =descricao
        this.#idFamilia = idFamilia
        this.#embalagem = embalagem
        this.#ean13 = ean13
        this.#marca = marca
        this.#preco = preco
    }

    get id(){
        return this.#id
    }

    get descricao(){
        return this.#descricao
    }

    get idFamilia(){
            return this.#idFamilia
    }

    get embalagem(){
        return this.#embalagem
    }

    get ean13(){
        return this.#ean13
    }

    get marca(){
        return this.#marca
    }
    get preco(){
        return this.#preco
    }
}