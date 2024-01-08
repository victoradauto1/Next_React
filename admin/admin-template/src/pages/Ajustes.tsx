import Layout from "@/components/template/Layout";

interface AjustesProps{
    titulo: string;
    subtitulo: string;
    children?: any;
}

export default function Ajustes(props:AjustesProps){
    return(
        <Layout titulo="Ajustes" subtitulo="Aqui você cofigurará sua aplicação">
              <h3>Conteúdo</h3>
        </Layout>
    )
}