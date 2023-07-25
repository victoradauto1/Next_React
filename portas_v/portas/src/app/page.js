import { useState } from 'react'
import Porta from '../components/porta/Porta'
import PortaModel from '../model/porta'

export default function Home() {

  const [p1, setP1] = useState (new PortaModel(1))
  


  return (
    <>
      <Porta porta={p1}/>
    </>
  )
}
