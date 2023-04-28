import Head from "next/head";
import styles from "./styles.module.css";
import { GetServerSideProps } from "next";

import { db } from "../../services/firebaseConnection";
import { doc, collection, query, where, getDoc } from "firebase/firestore";

import { Textearea } from '../../components/textarea'

interface TaskProps {
  item: {
    tarefa: string;
    public: boolean;
    created: string;
    user: string;
    taskId: string;
  };
}

export default function Task({ item }: TaskProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefa - Detalhes da tarefa</title>
      </Head>
      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{item.tarefa}</p>
        </article>
      </main>

      <section className={styles.commentsContainer}>

        <h2>Fazer comentário</h2>

        <form>
            <Textearea 
            placeholder="Digite seu comentário..."/>
            <button className={styles.button}>Enviar comentário</button>
        </form>

      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  const docRef = doc(db, "tarefas", id);

  const snapShot = await getDoc(docRef);

  if (snapShot.data() === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (!snapShot.data()?.public) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const milisecond = snapShot.data()?.created?.seconds * 1000;

  const task = {
    tarefa: snapShot.data()?.tarefa,
    public: snapShot.data()?.public,
    created: new Date(milisecond).toLocaleDateString(),
    user: snapShot.data()?.user,
    taskId: id,
  };

  console.log(task);

  return {
    props: {
      item: task,
    },
  };
};