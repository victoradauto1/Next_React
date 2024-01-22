import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import useClientes from "@/hooks/useClientes";
import { useEffect } from "react";


export default function Home() {

  const { salvarcliente, clienteExcluido, clienteSelecionado, novoCliente, obterTodos, cliente, clientes, visivel, setVisivel} = useClientes()

  useEffect(()=>{
    obterTodos()
  },[])

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-green-500 to-blue-700
    text-white
    `}
    >
      <Layout titulo="Cadastro simples">
        {visivel !== "form" ? (
          <>
            <div className="flex justify-end">
              <Botao 
              className="mb-4" 
              onCLick={()=>novoCliente(Cliente.vazio())}
              >Novo cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario 
          cliente={cliente} 
          cancelado={()=>setVisivel('tabela')}
          clienteMudou={salvarcliente}
          />
        )}
      </Layout>
    </div>
  );
}
