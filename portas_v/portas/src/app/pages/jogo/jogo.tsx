import styles from './jogo.module.css'
import { useState} from 'react'
import Porta from '../../../components/porta/Porta'
import { atualizarPortas, criarPortas } from '@/functions/portas'

export default function jogo(){

    const [portas, setPortas] = useState(criarPortas(3,3))

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