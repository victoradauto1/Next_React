import respostaModel from "@/model/resposta";
import styles from "../styles/Resposta.module.css";

interface RespostaProps {
  valor: respostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida: (indice: number) => void;
}

export default function Resposta(props: RespostaProps) {
  const resposta = props.valor
  const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
  const handleClick = (indice: number) => {
    console.log("Índice clicado:", indice);
    if (typeof props.respostaFornecida === 'function') {
      props.respostaFornecida(indice);
    } else {
      console.error("respostaFornecida não é uma função!");
    }
  };
  console.log("Tipo de respostaFornecida:", typeof props.respostaFornecida);
  return (
      <div className={styles.resposta}
          onClick={() => handleClick(props.indice)}>
          <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
              <div className={styles.frente}>
                  <div className={styles.letra}
                      style={{ backgroundColor: props.corFundoLetra }}>
                      {props.letra}
                  </div>
                  <div className={styles.valor}>
                      {resposta.valor}
                  </div>
              </div>
              <div className={styles.verso}>
                  {resposta.certa ? (
                      <div className={styles.certa}>
                          <div>A resposta certa é...</div>
                          <div className={styles.valor}>{resposta.valor}</div>
                      </div>
                  ) : (
                      <div className={styles.errada}>
                          <div>A resposta informada está errada...</div>
                          <div className={styles.valor}>{resposta.valor}</div>
                      </div>
                  )}
              </div>
          </div>
      </div>
  )
}