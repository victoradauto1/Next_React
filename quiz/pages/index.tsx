import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Questao from '@/components/Questao'
import questaoModel from '@/model/questao'
import respostaModel from '@/model/resposta'
import { useState } from 'react'


const questaoMock = new questaoModel(1, 'Qual é o maior país do Mundo?',
  [   respostaModel.errada('China'),
      respostaModel.errada('EUA'),
      respostaModel.errada('Canadá'),
      respostaModel.certa('Rússia')
  ])


export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)

  function onResponse (indice: number){
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  } 

  return (
    <div style={{
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",


       }}>
        <Questao  valor={questao} onResponse={onResponse}/>
    </div>
    )
}
