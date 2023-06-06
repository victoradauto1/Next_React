import Head from "next/head";
import styles from "../styles/home.module.scss";

import Image from "next/image";

import techsImage from '../../public/images/techs.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você para o seu próximo nível!</h1>
            <span>
              Uma plataforma com cursos que vão levar você do zero até o
              profissional na prática, direto ao ponto aplicando o que usamos no
              mercado de trabalho. 👊{" "}
            </span>
            <a>
              <button>COMEÇAR AGORA</button>
            </a>
          </section>
          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos Sujeito Programador"
          />
        </div>
        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps
              nativos para IOS e Android, desenvolvendo aplicativos do zero até
              aplicativos.{" "}
            </span>
          </section>

          <img
            src="/images/financasApp.png"
            alt="Conteúdos desenvolvimentos de app"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img
            src="/images/webDev.png"
            alt="Conteúdos desenvolvimentos de aplicações web"
          />

          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>
              Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.
            </span>
          </section>
        </div>
        <div className={styles.nextLevelContent}>

          <Image src={techsImage} alt="Tecnologias"/>
          <h2>Mais de <span>15 mil</span> já levaram sua carreira para o próximo nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a>
            <button>ACESSAR TURMA!</button>
          </a>
        </div>
      </main>
    </>
  );
}