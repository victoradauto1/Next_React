import { GetServerSideProps } from 'next'
import styles from './posts.module.scss'

import Head from 'next/head'
import Image from 'next/image'
import { getPrismicClient} from "../../services/prismic"
import { RichText } from 'prismic-dom'

interface PostProps{
    post:{
        slug: string;
        title: string;
        description: string;
        cover: string;
        upDatedAt: string
    }
}

export default function Post({post}: PostProps){

    console.log(post)
    return(
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main className={styles.container}>
                <article className={styles.post}>
                    <Image
                        quality={100}
                        src={post.cover}
                        width={720}
                        height={410}
                        alt={post.title}
                        placeholder='blur'
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUNU2sBwACPgEsF/drhQAAAABJRU5ErkJggg=="
                    />

                    <h1>{post.title}</h1>
                    <time>{post.upDatedAt}</time>
                    <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.description}}></div>
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({req, params}:any)=>{

    const { slugs }:any = params;
    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('post', String(slugs),{})

    if (!response){
        return{
            redirect:{
                destination:'/posts',
                permanent: false
            }
        }
    }

    const post = {
        slug: slugs,
        title: RichText.asText(response.data.title),
        description: RichText.asHtml(response.data.description),
        cover: response.data.cover.url,
        upDateAt: new Date(response.data.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })


    }

    console.log("aqui está o post", post)


        return{
            props:{
                post
            }
        }
}