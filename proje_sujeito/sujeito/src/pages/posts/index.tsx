import { GetStaticProps } from 'next'

import Head from 'next/head'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import thumb from '../../../public/images/thumb.png'
import {FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi'

import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import {RichText} from 'prismic-dom'


export default function Posts() {
    return(
        <div>
            <Head>
                <title>Blog | Sujeito Programador</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link  legacyBehavior href="/">
                    <a>
                        <Image src={thumb} alt='Post título 1' width={720} height={410} quality={100}/>
                        <strong>Criando o meu primeiro aplicativo</strong>
                        <time>14 JULHO 2021</time>
                    </a>
                   
                    </Link>
                    <div className={styles.buttonNavigate}>
                        <div>
                            <button>
                                <FiChevronsLeft size={25} color='#fff'/>
                            </button>
                            <button>
                                <FiChevronLeft size={25} color='#fff'/>
                            </button>
                        </div>
                        <div>
                            <button>
                                <FiChevronRight size={25} color='#fff'/>
                            </button>
                            <button>
                                <FiChevronsRight size={25} color='#fff'/>
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ()=>{

     const prismic = getPrismicClient();

     const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'post')
     ], {
        orderings: '[document.last_publication_date desc]',  //ordenar pela data mais rescente
        fetch:['post.title', 'post.description', 'post.cover'],
        pageSize: 3
     })

        console.log(response)
        
        return{
            props:{

            }
        }
}