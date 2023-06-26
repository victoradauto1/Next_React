import { useState } from "react"

export default function questao(){
    const [questao, setQuestao] = useState(null)

    fetch("http://localhost:3000/api/questao/209")
        .then(resp => resp.json())
        .then(questao => setQuestao(questao))

    const renderizarRespostas = ()=>{
        if(questao){
            return questao.respostas.map((resp, i) => 
                (<li key={i}>{resp}</li>)
         )
        } 

        return false
    }
    return(
        <div>
            <h1>Questão</h1>
            <span>{questao?.enunciado}</span>
            <ul>
                {renderizarRespostas()}
            </ul>
        </div>
    )
}