import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import questaoModel from "@/model/questao";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | questaoModel[] | questaoModel | any>
) {
  let idSelecionado: string | number | undefined;

  if (typeof req.query.id === "string") {
    idSelecionado = +req.query.id;

    const questaoEncontrada: questaoModel[] = questoes.filter(
      (q) => q.id === idSelecionado
    );

    if(questaoEncontrada.length === 1){

      const questaoSelecionada = questaoEncontrada[0].embaralharRespostas()
      const obj = questaoSelecionada.responderCom(0).toObject()
      res.status(200).json(obj)

    }else{
      console.log("Questão duplicada")
    }
    
    
  } else {
    console.error("req.query.id não é uma string ou está indefinido");
    res.status(404);
  }
}
