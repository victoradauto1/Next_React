import Cliente from "@/core/Cliente";
import { IconeApagar, IconeEditar } from "@/components/icons/Icones";


interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(prosp: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <th className={`text-left p-4`}>Código</th>
        <th className={`text-left p-4`}>Nome</th>
        <th className={`text-left p-4`}>Idade</th>
        <th className={`text-center p-4`}>Ações</th>
      </tr>
    );
  }

  function renderizarAcoes() {
    return (
      <td className={`flex self-center`}>
        <button className={`
        flex justify-center items-center text-green-600 rounded-lg p-1 m-1 mt-3
        hover:bg-green-200
        `}>{IconeEditar}</button>
        <button className={`flex justify-center items-center text-red-600 rounded-lg p-1 m-1 mt-3
        hover:bg-red-100`}>{IconeApagar}</button>
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
          {renderizarAcoes()}
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
