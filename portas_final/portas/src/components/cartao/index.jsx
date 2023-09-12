import style from './cartao.module.css'

export default function Cartao(props){
    
    return(
        <div className={style.cartao}
        style={{backgroundColor: props.bgcolor ?? "#fff"}}>
           Cartão
        </div>
    )
}