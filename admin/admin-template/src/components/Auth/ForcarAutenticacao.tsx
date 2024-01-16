import Image from "next/image"
import Loading from "../../../public/images/loading.gif"
import useAuth from "@/data/hook/useAuth"
import router from "next/router"
import Head from "next/head"

interface ForcarAutenticacaoProps{

    children: React.ReactNode
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps){

    const{usuario, carregando} = useAuth()

    function renderizarConteudo(){
        return(
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html:`if(!document.cookie?.includes("admin-template-vs-auth")){
                        window.location.href="/Autenticacao"
                    }`
                }}/>
            </Head>
            {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return(
            <div className={`flex justify-center items-center h-screen `}>
                <Image src={Loading} alt="Gif de animação para carregar"/>
            </div>
        )
    }

    if(!carregando && usuario?.email){
        return renderizarConteudo()
    } else if(carregando){
        return renderizarCarregando()
    } else{
        router.push("/Autenticacao")
        return null
    }
}