export default function questao (req, res) {

    if(req.method === 'GET'){
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'qual e a sua cor preferida?',
            respostas:[
                'Branca', 'Cinza', 'Marrom','Amarelo', 'Vermelho'
            ]
        })
    } else{
        res.status(405).send()
    }
}