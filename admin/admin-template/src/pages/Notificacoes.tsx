import Layout from "@/components/template/Layout";

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
      <h3>Conteúdo</h3>
    </Layout>
  );
}
