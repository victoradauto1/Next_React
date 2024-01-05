import questaoModel from "@/model/questao";
import respostaModel from "@/model/resposta";

const questoes:questaoModel[] = [
        new questaoModel(201, 'Qual bicho transmite a doença de Chagas?',
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
        new questaoModel(203, 'Qual o coletivo de cães?',
        [   respostaModel.errada('Manda'),
            respostaModel.errada('Alcateia'),
            respostaModel.errada('Rebanho'),
            respostaModel.certa('Matilha')
        ]),
        new questaoModel(204, 'Qual é o triangulo que tem todos os lados diferentes?',
        [   respostaModel.errada('Equilátero'),
            respostaModel.errada('Isósceles'),
            respostaModel.errada('Trapézio'),
            respostaModel.certa('Escaleno')
        ]),
        new questaoModel(205, "Qual é o maior país do Mundo?", [
            respostaModel.errada("China"),
            respostaModel.errada("EUA"),
            respostaModel.errada("Canadá"),
            respostaModel.certa("Rússia"),
          ])
]

export default questoes