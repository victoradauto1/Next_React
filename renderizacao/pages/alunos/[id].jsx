
export function getStaticPaths(){

    return{
        fallback: false,
        paths:[
            { params: {id: '101'}},
            { params: {id: '56'}},
            { params: {id: '4509'}}
        ]
    }
}

export async function getStaticProps({params}){
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()

    return{
        props: {
           aluno
        }
    }
}

export default function alunos (props){

    const { aluno } = props

    return(
        <div>
            <h1>Detalhes Alunos</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.name}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}