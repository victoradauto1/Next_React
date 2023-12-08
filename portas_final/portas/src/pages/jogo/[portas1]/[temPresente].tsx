import styles from "../../../styles/jogo.module.css";
import { useState, useEffect } from "react";
import Porta from "../../../components/porta/[temPresente]";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";
import PortaModel from "@/model/porta";

export default function jogo() {
  const router = useRouter();

  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState<PortaModel[]>([]);

  // console.log(router?.query.portas, router?.query.temPresente)

  useEffect(() => {
    const portas = router.query.portas1 ? +router.query.portas1 : 0;
    const temPresente = router.query.temPresente
      ? +router.query.temPresente
      : 0;
    const qtdPortasValida = portas >= 3 && portas < 30;
    const temPresenteValido = temPresente <= portas && temPresente >= 1;
    setValido(qtdPortasValida && temPresenteValido);
  }, [portas]);

  useEffect(() => {
    const portas = router.query.portas1 ? +router.query.portas1 : 0;
    const temPresente = router.query.temPresente
      ? +router.query.temPresente
      : 0;
    setPortas(criarPortas(portas, temPresente));
    console.log(router.query);
  }, [router?.query]);

  function renderizarPortas() {
    return valido ? (
      portas.map((porta: PortaModel) => {
        return (
          <Porta
            key={porta.numero}
            value={porta}
            onChange={(novaPorta) =>
              setPortas(atualizarPortas(portas, novaPorta))
            }
          />
        );
      })
    ) : (
      <div className={styles.aviso}>
        <h1> Valor inserido é inválido!</h1>
        <p>
          O número de portas escolhido deve estar entre 3 e 30, e a porta com
          presente deve estar compreendida entre 1 e o número de portas
          escolhidos
        </p>
      </div>
    );
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar o Jogo</button>
        </Link>
      </div>
    </div>
  );
}
