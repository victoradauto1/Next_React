
export default function handler(req, res){
    res.status(200).json([  
        {id: 1, nome:"caneta", preço:5.50},
        {id: 2, nome:"caderno", preço:25.90},
        {id: 3, nome:"borracha", preço:2.50},
        {id: 4, nome:"lapiseira", preço:3.50},
    ])
}