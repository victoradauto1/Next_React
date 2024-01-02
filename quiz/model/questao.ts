import { embaralhar } from "@/functions/arrays"
import respostaModel from "./resposta"

export default class questaoModel{
    #id:number
    #enunciado: string
    #respostas: respostaModel[]
    #acertou: boolean
    // #respondida: boolean

    constructor(id: number, enunciado: string, respostas: any[], acertou = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }
    get respostas(){
        return this.#respostas
    }
    get acertou(){
        return this.#acertou
    }

    get naoRespondida(){
        return !this.respondida
    }

    get respondida(){
        for(let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }
        return false
    }

    responderCom(indice:number):questaoModel{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i)=>{
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar? resposta.revelar() : resposta
        })
        return new questaoModel(this.id, this.enunciado, respostas, acertou )
    }

    embaralharRespostas(): questaoModel{
        let respostasEmbaralhadas =  embaralhar(this.#respostas)
        return new questaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    toObject(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resp => resp.toObejct()),
            acertou: this.#acertou,
            respondida: this.respondida
        }
        
    }
}