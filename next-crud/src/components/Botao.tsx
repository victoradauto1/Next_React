interface BotaoProps{
    children: any
    className?: string
    cor?: 'green' | 'blue' | 'gray'
    onCLick?: ()=>void
}

export default function Botao(props: BotaoProps){
    return(
        <button onClick={props.onCLick} className={`
        bg-orange-500 text-white px-4 py-2 rounded-lg
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}