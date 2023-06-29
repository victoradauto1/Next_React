import { GetServerSideProps } from 'next'
import styles from './posts.module.scss'

import { getPrismicClient} from "../../services/prismic"
import { RichText } from 'prismic-dom'

interface PostProps{
    post:{
        slug: string;
        title: string;
        description: string;
        corver: string;
        upDatedAt: string
    }
}

export default function Post({post}: PostProps){

    console.log(post)
    return(
        <div>
            <h1>DETALHE DO POST</h1>
        </div>
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


        return{
            props:{
                post
            }
        }
}