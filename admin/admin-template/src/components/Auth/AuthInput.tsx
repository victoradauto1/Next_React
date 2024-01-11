interface AuthInputProps{
    label: string
    valor:any
    tipo?: 'text' | 'email' | 'password'
    naoRenderizarQuando?: boolean
    valorMudou: (novoValor:any)=> void
    obrigatorio?: boolean
}

export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input type={props.tipo ?? 'text'} value={props.valor} onChange={(e)=>props.valorMudou?.(e.target.value)} required={props.obrigatorio}
            className={`
            px-4 py-3 rounded-lg bg-gray-200 mt-2 
            border focus:border-blue-500 focus:outline-none focus:bg-white 
            `}/>
        </div>
    )
}