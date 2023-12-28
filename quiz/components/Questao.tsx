import styles from '../styles/Questao.module.css'
import questaoModel from "@/model/questao"
import Enunciado from './Enunciado'

interface  QuestaoProps {
    valor: questaoModel
}

export default function Questao (props: QuestaoProps){
    
    console.log("prop" , props)

    const questao = props.valor

    

    return(
        <div className={styles.questao}>
           <Enunciado texto={questao.enunciado}/>
        </div>
    )
}