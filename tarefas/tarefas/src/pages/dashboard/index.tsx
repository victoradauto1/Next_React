import { GetServerSideProps } from 'next'
import styles from './styles.module.css'
import Head from 'next/head'
import { getSession } from 'next-auth/react'

export default function Dashboad (){
    return(
        <div className={styles.dashboard}>
            <Head>
                <title>Painel de Tarefas</title>
            </Head>
            
            <h1>Página Painel</h1>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req})=>{

    const session = await getSession({ req });

    console.log(session)

        return{
            props:{},
        }
}