import Head from 'next/head'
import styles from './styles.module.css'
import { GetServerSideProps } from 'next'

import { db } from '../../services/firebaseConnection'
import { 
    doc,
    collection,
    query,
    where,
    getDoc
} from 'firebase/firestore'


export default function Task(){
    return(
        <div className={styles.container}>
            <Head>
                <title>
                    Detalhes da tarefa
                </title>
            </Head>
            <main className={styles.main}>
                <h1>Tarefa</h1>
            </main>
        </div>
    )
}

export const getServeSideProps: GetServerSideProps = async ({ params})=>{

    const id = params?.id as string

    const docRef = doc(db, "tarefas", id)

    const snapShot = await getDoc(docRef)

    if( snapShot.data() === undefined){
        return{
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    if (!snapShot.data()?.public ){
        return{
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    console.log(snapShot.data())

    return{
        props:{}
    }

}