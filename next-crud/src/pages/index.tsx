import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 22, "1"),
    new Cliente("Paulo", 47, "2"),
    new Cliente("Júlia", 42, "3"),
    new Cliente("Pedro", 42, "3"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir... ${cliente.nome}`);
  }

  function salvarcliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-green-500 to-blue-700
    text-white
    `}
    >
      <Layout titulo="Cadastro simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onCLick={()=>setVisivel('form')}>Novo cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
            ></Tabela>
          </>
        ) : (
          <Formulario 
          cliente={clientes[0]} 
          cancelado={()=>setVisivel('tabela')}
          clienteMudou={salvarcliente}
          />
        )}
      </Layout>
    </div>
  );
}
