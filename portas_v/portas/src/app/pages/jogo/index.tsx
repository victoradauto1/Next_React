import styles from "./jogo.module.css";
import { useState, useEffect } from "react";
import Porta from "../../../components/porta/[temPresente]";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Link from 'next/link'
import { useRouter } from "next/router";
import PortaModel from "@/model/porta"



export default function jogo() {

  const router =  useRouter()

  const [portas, setPortas] = useState<PortaModel[]>([]);

 useEffect(() => {
  const portas = router.query.portas !== undefined ? +router.query.portas : 0;
  const temPresente = router.query.temPresente !== undefined ? +router.query.temPresente : 0;
  setPortas(criarPortas(portas, temPresente));
}, [router?.query]);
  
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
