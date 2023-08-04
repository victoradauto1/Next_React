"use client"
import { useState} from 'react'
import Porta from '../components/porta/Porta'
import PortaModel from '../model/porta'
import { atualizarPortas, criarPortas } from '@/functions/portas'

const Home = () =>{

  const [p1, setP1] = useState (new PortaModel(1))
 
  
  console.log(criarPortas(3,2))

  const [portas, setPortas] = useState(criarPortas(3,2))

  function renderizarPortas(){
    return portas.map(porta => {
      return(<Porta key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>)
    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}

export default Home
