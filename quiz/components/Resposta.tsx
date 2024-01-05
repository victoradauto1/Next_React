import respostaModel from "@/model/resposta";
import styles from "../styles/Resposta.module.css";

interface RespostaProps {
  valor: respostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  onResponse: (indice: number) => void;
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor;
  
    return (
      <div className={styles.resposta} onClick={() => props.onResponse(props.indice)}>
        <div className={styles.conteudoResposta}>
          <div className={styles.frente}>
            <div
              className={styles.letra}
              style={{ backgroundColor: props.corFundoLetra }}
            >
              {props.letra}
            </div>
            <div className={styles.valor}>{resposta.valor}</div>
          </div>
          <div className={`${styles.verso} ${resposta.revelada ? styles.respostaRevelada : ""}`}>
              <div className={styles.certa}>
                <div>A resposta certa é ...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
              <div className={styles.errada}>
                <div>A resposta informada está errada...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
  