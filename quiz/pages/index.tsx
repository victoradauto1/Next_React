import Head from "next/head";
import questaoModel from "@/model/questao";
import respostaModel from "@/model/resposta";
import { useState } from "react";
import Questionario from "@/components/Questionario";

const questaoMock = new questaoModel(1, "Qual é o maior país do Mundo?", [
  respostaModel.errada("China"),
  respostaModel.errada("EUA"),
  respostaModel.errada("Canadá"),
  respostaModel.certa("Rússia"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function questaoRespondida() {
    return;
  }

  function irParaProximoPasso() {
    return;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questionario
        questao={questaoMock}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irParaProximoPasso={irParaProximoPasso}
      />
    </div>
  );
}
