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

    const questaoEncontradaObjeto = questaoEncontrada.map((resp) =>
      resp.toObject()
    );

    res.status(200).json(questaoEncontradaObjeto);
  } else {
    console.error("req.query.id não é uma string ou está indefinido");
    res.status(204);
  }
}
