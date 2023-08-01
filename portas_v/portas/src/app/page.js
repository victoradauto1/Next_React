"use client"
import { useState} from 'react'
import Porta from '../components/porta/Porta'
import PortaModel from '../model/porta'

const Home = () =>{

  const [p1, setP1] = useState (new PortaModel(1))
  const [texto, setTexto] = useState("...")
  


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <input type='text' vaue={texto} onChange={e=> setTexto(e.target.value)}/>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}

export default Home
