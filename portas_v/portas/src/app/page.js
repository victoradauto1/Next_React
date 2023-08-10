"use client"
import { useState} from 'react'
import PortaModel from '../model/porta'
import Jogo from '../../src/app/pages/jogo/Jogo'

const Home = () =>{

  // const [p1, setP1] = useState (new PortaModel(1))
 
  return (
    <div>
      <h1>Formulário inicial de entrada</h1>
      <Jogo/>
    </div>
  )
}

export default Home
