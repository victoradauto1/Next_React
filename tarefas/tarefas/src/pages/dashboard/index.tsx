import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { Textearea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, useState, FormEvent, useEffect } from "react";

import { db } from "../../services/firebaseConnection";

import {
  addDoc,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
  doc,
  deleteDoc
} from "firebase/firestore";
import Link from 'next/link'

interface HomeProps {
  user: {
    email: string;
  };
}

interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

export default function Dashboad({ user }: HomeProps) {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    async function loadTarefas() {
      const tarefas = collection(db, "tarefas");
      const q = query(
        tarefas,
        orderBy("created", "desc"),
        where("user", "==", user?.email)
      );
      onSnapshot(q, (snapshot) => {
        let listas = [] as TaskProps[];

        snapshot.forEach((doc) => {
          listas.push({
            id: doc.id,
            tarefa: doc.data().tarefa,
            created: doc.data().created,
            public: doc.data().public,
            user: doc.data().user,
          });
        });
        setTasks(listas);
      });
    }

    loadTarefas();
  }, [user?.email]);

  const handleChangePublic = (e: ChangeEvent<HTMLInputElement>) => {
    setPublicTask(e.target.checked);
  };

  const handleRegisterTask = async (e: FormEvent) => {
    e.preventDefault();

    if (input === "") return;

    try {
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        created: new Date(),
        user: user?.email,
        public: publicTask,
      });
    } catch (err) {
      console.log(err);
    }

    setInput(" ");
    setPublicTask(false);
  };

  async function handleShare (id: string){
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/task/${id}`
    )
  }

  async function handleDeleteTask(id: string){
    const docRef = doc(db, "tarefas", id )
    await deleteDoc(docRef)
  }


  return (
    <div className={styles.dashboard}>
      <Head>
        <title>Painel de Tarefas</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>
            <form onSubmit={handleRegisterTask}>
              <Textearea
                placeholder="Digite qual sua tarefa..."
                value={input}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(e.target.value)
                }
              />
              <div className={styles.checkboxArea}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={publicTask}
                  onChange={handleChangePublic}
                />
                <label>Deixar tarefa pública?</label>
              </div>
              <button className={styles.button}>Registrar</button>
            </form>
          </div>
        </section>
        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>
          {tasks &&
            tasks.map((item) => (
              <article key={item.id} className={styles.task}>
                {item.public && (
                  <div className={styles.tagContainer}>
                    <label className={styles.tag}>PÚBLICO</label>
                    <button className={styles.shareButton} onClick={()=>handleShare(item.id)}>
                      <FiShare2 size={22} color="#040405" />
                    </button>
                  </div>
                )}
                <div className={styles.taskContent}>
                  {item.public? (<Link href={`/task/${item.id}`}>
                    <p>{item.tarefa}</p>
                    </Link>): <p>{item.tarefa}</p>}
                  <button className={styles.trashButton} onClick={()=> handleDeleteTask(item.id)}>
                    <FaTrash size={24} color="#ea3140" />
                  </button>
                </div>
              </article>
            ))}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    //se não tem usuários, vamos redirecionar para home "/"
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // console.log(session)

  return {
    props: {
      user: {
        email: session?.user?.email,
      },
    },
  };
};
