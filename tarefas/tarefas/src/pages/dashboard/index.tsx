import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import { Textearea } from '@/components/textarea'
import { FiShare2 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'

export default function Dashboad (){
    return(
        <div className={styles.dashboard}>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>
            
            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>
                        <form>
                            <Textearea
                            placeholder='Digite qual sua tarefa...'
                            />
                            <div className={styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox} />
                                <label>Deixar tarefa pública?</label>
                            </div>
                            <button className={styles.button}>Registrar</button>
                        </form>
                    </div>

                </section>
                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>
                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>PÚBLICO</label>
                            <button className={styles.shareButton}>
                                <FiShare2
                                size={22}
                                color="#3182ff"/>
                            </button>
                        </div>
                        <div className={styles.taskContent}>
                            <p>Minhas primeira tarefa de exemplo show demais!</p>
                            <button className={styles.trashButton}>
                                <FaTrash
                                size={24}
                                color="#ea3140"
                                />
                            </button>
                        </div>
                    </article>
                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>PÚBLICO</label>
                            <button className={styles.shareButton}>
                                <FiShare2
                                size={22}
                                color="#3182ff"
                                />
                            </button>
                        </div>
                        <div className={styles.taskContent}>
                            <p>Minhas primeira tarefa de exemplo show demais!</p>
                            <button className={styles.trashButton}>
                                <FaTrash
                                size={24}
                                color="#ea3140"
                                />
                            </button>
                        </div>
                    </article>

                </section>

            </main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req})=>{

    const session = await getSession({ req });
    
    if (!session?.user){
        //se não tem usuários, vamos redirecionar para home "/"
        return{
            redirect:{
                destination: "/",
                permanent: false,
            },
        }
    }

    // console.log(session)

        return{
            props:{},
        }
}