import questaoModel from "@/model/questao";
import styles from "../styles/Questionario.module.css";
import Questao from "./Questao";
import Botao from "./Botao";


interface QuestionarioProps {
  questao: questaoModel;
  ultima: boolean;
  questaoRespondida: (questao: questaoModel) => void;
  irParaProximoPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
    


  function respostaFornecida(indice:number) {
    if(props.questao.naoRespondida){
        props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoPraResposta={6}
          respostaFornecida={respostaFornecida}
          timeIsOver={props.irParaProximoPasso}
        />
      ) : (
        false
      )}
      <Botao
        texto={props.ultima ? "Finalizar" : "Próxima"}
        onClick={props.irParaProximoPasso}
      />
    </div>
  );
}
