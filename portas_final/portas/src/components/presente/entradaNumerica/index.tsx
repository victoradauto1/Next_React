import style from './entradaNumerica.module.css'


interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps){

    const dec =()=>{
        props.onChange(props.value - 1)
    }

    const inc =()=>{
        props.onChange(props.value + 1)
    }

    return(
        <div className={style.entradaNumerica}>
            <span className={style.text}>{props.text}</span>
            <span className={style.value}>{props.value} </span>
            <div className={style.botoes}>
                <button className={style.btn} onClick={dec}> - </button>
                <button className={style.btn} onClick={inc}> + </button>
            </div>
        </div>
    )
}