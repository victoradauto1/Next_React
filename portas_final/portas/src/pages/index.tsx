import EntradaNumerica from '@/components/presente/entradaNumerica'
import Cartao from '../components/cartao/index'
import { useState } from 'react'

import style from '@/styles/formulario.module.css'

import Link from 'next/link'

export default function Formulario() {

  const [qtdePortas, setQtdePortas] = useState<number>(7)
  const [comPresente, setComPresente] = useState<number>(2)

  return (
    <div className={style.formulario}>
      <div>
      <Cartao bgcolor='#912121'>
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica text='Número de Portas?' value={qtdePortas} onChange={novaqtdePortas => setQtdePortas(novaqtdePortas) }/>
      </Cartao>
      </div>
      <div>
      <Cartao>
      <EntradaNumerica text='Porta com Presente' value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente) }/>
      </Cartao>
      <Cartao bgcolor='#28a085'>
      <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
          <h2 className={style.link}> Iniciar </h2>
        </Link>
      </Cartao>
      </div>
    </div>
  )
}
