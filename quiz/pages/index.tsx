import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Questao from '@/components/Questao'
import questaoModel from '@/model/questao'
import respostaModel from '@/model/resposta'

export default function Home() {

  const questaoTeste = new questaoModel(1, 'Qual o maior país do Mundo?',
  [   respostaModel.errada('China'),
      respostaModel.errada('EUA'),
      respostaModel.errada('Canadá'),
      respostaModel.certa('Rússia')
  ])

  return (
    <div style={{
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",


       }}>
        <Questao  valor={questaoTeste}/>
    </div>
    )
}
