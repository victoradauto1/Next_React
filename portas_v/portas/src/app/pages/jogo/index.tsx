import styles from "./jogo.module.css";
import { useState } from "react";
import Porta from "../../../components/porta/[temPresente]";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Link from 'next/link'
import { useRouter } from "next/router";
import PortaModel from "@/model/porta"


export default function jogo() {

  const router =  useRouter()

  const [portas, setPortas] = useState([]);


  router.query.portas
  router.query.temPresente

  
  function renderizarPortas() {
    return portas.map((porta:PortaModel) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Reiniciar o Jogo</button>
        </Link>
      </div>
    </div>
  );
}
