import useDataApp from "@/data/hook/useAppData";
import BotaoAlternartema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps){
    
    const {tema, alternarTema} = useDataApp()

    
    return(
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end`}>
                <BotaoAlternartema/>
            </div>
        </div>
    )
}