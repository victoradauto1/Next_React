import Cliente from "@/core/Cliente";
import clienteRepositorio from "@/core/clienteRepositorio";
import ColecaoCliente from "@/firebase/db/colecaoCliente";
import { useState } from "react";

export default function useClientes() {
  
    const repo: clienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  async function salvarcliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  return{
    salvarcliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos,
    cliente,
    clientes,
    visivel,
    setVisivel
  }
}
