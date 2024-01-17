import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 22, "1"),
    new Cliente('Paulo', 47, "2"),
    new Cliente('Júlia', 42, "3"),
    new Cliente('Pedro', 42, "3")
  ]

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-green-500 to-blue-700
    text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
