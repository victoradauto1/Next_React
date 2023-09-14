import style from './cartao.module.css'

interface CartaoProps{
    bgcolor?: string
    children?: any
}
export default function Cartao(props: CartaoProps){
    
    return(
        <div className={style.cartao}
        style={{backgroundColor: props.bgcolor ?? "#fff"}}>
            {props.children}
        </div>
    )
}