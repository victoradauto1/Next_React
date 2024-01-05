import questaoModel from "@/model/questao";
import respostaModel from "@/model/resposta";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";
import { useRouter } from "next/router";

const questaoMock = new questaoModel(0, "", [
  respostaModel.errada(""),
  respostaModel.errada(""),
  respostaModel.errada(""),
  respostaModel.certa(""),
]);

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()


  const[idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<questaoModel>(questaoMock);
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function recebendoIdsDasQuestoes(){
     const res = await fetch(`${BASE_URL}/questionario`)
     const idsDasQuestoes = await res.json()
     setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestoes(idQuestao: number){
    const res = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await res.json()
    const novaQuestao =questaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
 }

  useEffect(()=>{
    recebendoIdsDasQuestoes()
  },[])

  useEffect(()=>{
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0])
  },[idsDasQuestoes])

  function questaoRespondida(questaoRespondida: questaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou? 1: 0))
  }

  function idProximaPergunta(){
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    console.log(idProximaPergunta)
    return idsDasQuestoes[proximoIndice]
  }

  function irParaProximoPasso() {
    const proximoId = idProximaPergunta()
    console.log('Próximo ID da pergunta:', proximoId);
    proximoId? irParaProximaQuestao(proximoId) : finalizar()
  }

  function irParaProximaQuestao(proximoId: number){
    carregarQuestoes(proximoId)
  }

  function finalizar(){
    router.push({
      pathname: "resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  console.log(questao)
  
  return (
    <div>
      <Questionario
        questao={questao}
        ultima={idProximaPergunta()=== undefined}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      />
    </div>
  );
}
