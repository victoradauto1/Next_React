import useDataApp from "@/data/hook/useAppData";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";
import ForcarAutenticacao from "../Auth/ForcarAutenticacao";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {

  const {tema} = useDataApp()

  return (
    <ForcarAutenticacao >
       <div className={`${tema} flex h-screen w-screen`}>
      <MenuLateral />
      <div className={`
      flex flex-col w-full p-7
      bg-gray-300 dark:bg-gray-800
      `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
    </ForcarAutenticacao>
   
  );
}
