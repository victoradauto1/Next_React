import styles from "../styles/Questao.module.css";
import questaoModel from "@/model/questao";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
  { letra: "A", cor: '#F2C866' },
  { letra: "B", cor: "#F266BA" },
  { letra: "C", cor: "#85D4F2" },
  { letra: "D", cor: "#BCE596" },
];

interface QuestaoProps {
  valor: questaoModel;
  respostaFornecida: (indice: number)=> void
  tempoPraResposta?:number
  timeIsOver: ()=> void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`${questao.id} - ${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].letra}
          corFundoLetra={letras[i].cor}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.timeIsOver}/>
      {renderizarRespostas()}
    </div>
  );
}
