
export default function handler (req, res){

    const id = +req.query.id
    
    res.status(200).json({
        id,
        name: 'João de Almeida',
        email: 'joaoalmeida2023@gmail.com'
    })
}