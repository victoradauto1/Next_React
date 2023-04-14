import {useSession, signIn, signOut} from 'next-auth/react'
import styles from './styles.module.css'
import Link from 'next/link'

export function Header(){

    const {data:session, status} = useSession();

    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                    <h1 className={styles.logo}>Tarefas<span>+</span></h1>
                    </Link>
                    <Link href="/dashboard" className={styles.link}>
                    Meu Painel
                    </Link>
                </nav>
                { status === "loading"? ():() }
                <button className={styles.loginButton}>acessar</button>
            </section>      
        </header>

        
    )
}