import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente:Cliente)=> void
  cancelado?: ()=> void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? <Entrada 
      somenteLeitura 
      texto="Código" 
      valor={id}
      className="mb-2"
      /> : false}
      <Entrada 
      texto="Nome" 
      tipo="text" 
      valor={nome} 
      valorMudou={setNome} 
      className="mb-4" 
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className={`flex flex-row mt-7 justify-end`}>
      <Botao className={`mr-4 bg-blue-600`} onCLick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>{id? 'Alterar': 'Salvar'}</Botao>
      <Botao className={`bg-gray-500`} onCLick={props.cancelado}>Cancelar</Botao>
      </div>
      
    </div>
  );
}
