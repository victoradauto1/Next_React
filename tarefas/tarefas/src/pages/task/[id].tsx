import { ChangeEvent, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

import Head from "next/head";
import styles from "./styles.module.css";
import { GetServerSideProps } from "next";

import { db } from "../../services/firebaseConnection";
import {
  doc,
  collection,
  query,
  where,
  getDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { Textearea } from "../../components/textarea";
import { FaTrash } from 'react-icons/fa'

interface TaskProps {
  item: {
    tarefa: string;
    public: boolean;
    created: string;
    user: string;
    taskId: string;
  },
  allComments: CommentProps[]
}

interface CommentProps {
  id: string;
  comment: string;
  name: string;
  user: string;
  taskId: string;
}

export default function Task({ item, allComments }: TaskProps) {
  const { data: session } = useSession();

  const [input, setInput] = useState("");
  const [ comments, setCommnets] = useState<CommentProps[]>(allComments || [])

  const handleComment = async (e: FormEvent) => {
    e.preventDefault();

    if (input === "") return;

    if (!session?.user?.email || !session?.user?.name) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        comment: input,
        created: new Date(),
        user: session?.user?.email,
        name: session?.user?.name,
        taskId: item?.taskId
      });

      const data = {
        id: docRef.id,
        comment: input,
        user: session?.user?.email,
        name: session?.user?.name,
        taskId: item?.taskId
      }

      setCommnets((oldItems)=>[...oldItems, data])
      setInput("")

    } catch (err) {
      console.log(err);
    }

    
  };
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

        <form onSubmit={handleComment}>
          <Textearea
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(e.target.value)
            }
            placeholder="Digite seu comentário..."
          />
          <button disabled={!session?.user} className={styles.button}>
            Enviar comentário
          </button>
        </form>
      </section>
      <section className={styles.commentsContainer}>
            <h2>Todos comentários</h2>
            {comments.length === 0 && (
              <span>Nenhum comentário foi encontrado</span>
            )}
            { comments.map((item)=>(
              <article key={item.id} className={styles.comment}>
                <div className={styles.headComments}>
                  <label className={styles.commentsLabel}>{item.name}</label>
                  {item.user === session?.user?.email &&(
                    <button className={styles.buttonTrash}>
                    <FaTrash size={18} color="#EA3140"/>
                  </button>
                  )}
                </div>
                <p>{item.comment}</p>
              </article>
            ))}
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const docRef = doc(db, "tarefas", id);

  const q = query(collection(db, "comments"), where("taskID", "==", id))
  const snapshotComments = await getDocs(q)

  let allComments: CommentProps[] = []

  snapshotComments.forEach((doc)=>{
    allComments.push({
      id: doc.id,
      comment: doc.data().comment,
      name: doc.data().name,
      user: doc.data().user,
      taskId: doc.data().taskID
    })
  })

  console.log(allComments)

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

  return {
    props: {
      item: task,
      allComments: allComments,
    },
  };
};
