export default class respostaModel{
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor( valor: string, certa: boolean, revelada = false){
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string){
        return new respostaModel(valor, true)
    }

    static errada(valor: string){
        return new respostaModel(valor, false)
    }
    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    revelar(){
        return new respostaModel(this.valor, this.certa, true) 
    }

    static criarUsandoObjeto(obj:respostaModel): respostaModel{
        return new respostaModel(obj.valor, obj.certa, false)
    }


    toObejct (){
        return{
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada

        }
    }
}