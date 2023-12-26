import { useEffect, useState } from "react";

type Questao = {
  id: string;
  titulo: string;
  opcoes: string[];
  resposta: string;
};

export default function Testes() {
  const [questoes, setQuestoes] = useState<Questao[]>([]);

  useEffect(() => {
    const fetchQuestoes = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/questoes/01');
        if (!res.ok) {
          throw new Error('Erro ao buscar as questões');
        }
        const questoesData: Questao[] = await res.json();
        setQuestoes(questoesData);
      } catch (error) {
        console.error("Erro ao buscar questões:", error);
      }
    };

    fetchQuestoes();
  }, []);

  const letras = ["A", "B", "C", "D"];

  console.log(questoes)

  return (
    <div>
      {questoes.length > 0 ? (
        questoes.map((questao, i) => (
          <div key={i}>
            <h3>{questao.titulo}</h3>
            <ul>
              {questao.opcoes && questao.opcoes.map((opcao, index) => (
                <li key={index}>
                  {letras[index]}: {opcao}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Carregando questões...</p>
      )}
    </div>
  );
}
