import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import { embaralhar } from "@/functions/arrays";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const ids = questoes.map( q => q.id)
    res.status(200).json(embaralhar(ids))
  }
  