import Cliente from "@/core/Cliente";
import { IconeApagar, IconeEditar } from "@/components/icons/Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(prosp: TabelaProps) {

  const exibirAcoes = prosp.clienteExcluido || prosp.clienteSelecionado
  function renderizarCabecalho() {
    return (
      <tr>
        <th className={`text-left p-4`}>Código</th>
        <th className={`text-left p-4`}>Nome</th>
        <th className={`text-left p-4`}>Idade</th>
        {exibirAcoes?(<th className={`text-center p-4`}>Ações</th>): false}
        
      </tr>
    );
  }

  function renderizarAcoes(cliente:Cliente) {
    return (
      <td className={`flex justify-center`}>
        {prosp.clienteSelecionado ? (<button onClick={()=> prosp.clienteSelecionado?.(cliente)}
          className={`
        flex justify-center items-center text-green-600 rounded-lg p-1 m-1 mt-3
        hover:bg-green-200
        `}
        >
          {IconeEditar}
        </button>): false}
        
        {prosp.clienteExcluido? (<button onClick={()=> prosp.clienteExcluido?.(cliente)}
          className={`flex justify-center items-center text-red-600 rounded-lg p-1 m-1 mt-3
        hover:bg-red-100`}
        >
          {IconeApagar}
        </button>): false}
      </td>
    );
  }

  console.log(IconeApagar);
  function renderizarDados() {
    return prosp.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}`}
        >
          <td className={`text-left p-4`}>{cliente.id}</td>
          <td className={`text-left p-4`}>{cliente.nome}</td>
          <td className={`text-left p-4`}>{cliente.idade}</td>
          {exibirAcoes? renderizarAcoes(cliente): false}
        </tr>
      );
    });
  }

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`
    bg-blue-500
    text-gray-100
    `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
