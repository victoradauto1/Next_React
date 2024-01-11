import Layout from "@/components/template/Layout";
import useDataApp from "@/data/hook/useAppData";

interface NotificacoesProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Notificacoes(props: NotificacoesProps) {

  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você definirá as suas notificações"
    >
    <h1>{props.titulo}</h1>
    </Layout>
  );
}
