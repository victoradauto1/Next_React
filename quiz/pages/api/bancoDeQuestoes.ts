import questaoModel from "@/model/questao";
import respostaModel from "@/model/resposta";

const questoes:questaoModel[] = [
        new questaoModel(306, 'Qual bicho transmite a doença de Chagas?',
        [   respostaModel.errada('Pulga'),
            respostaModel.errada('Pernilongo'),
            respostaModel.errada('Barata'),
            respostaModel.certa('Barbeiro')
        ]),
        new questaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimun"?',
        [   respostaModel.errada('Caju'),
            respostaModel.errada('Coco'),
            respostaModel.errada('Chuchu'),
            respostaModel.certa('Abóbora')
        ]),
]

export default questoes