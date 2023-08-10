import PortaModel from "@/model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[]{

    return Array.from({length: qtde}, (_,i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], PortaModificada: PortaModel){
    return portas.map(portaAtual=>{
        const igualAModificada = portaAtual.numero === PortaModificada.numero

        if(igualAModificada){
            return PortaModificada
        } else {
            return PortaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })

}