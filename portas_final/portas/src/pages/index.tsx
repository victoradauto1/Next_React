import Cartao from '../components/cartao/index'

import style from '@/styles/formulario.module.css'

export default function Formulario() {
  return (
    <div className={style.formulario}>
      <div>
      <Cartao bgcolor='#c0392' ></Cartao>
      <Cartao></Cartao>
      </div>
      <div>
      <Cartao></Cartao>
      <Cartao bgcolor='#'></Cartao>
      </div>
    </div>
  )
}
