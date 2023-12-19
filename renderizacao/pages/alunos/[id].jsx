
export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/alunos/rotasalunos`);
    const ids = await res.json();

    const paths = ids.map((id) => {
        return { params: { id: `${id}` } };
    });

    console.log(paths);

    return {
        fallback: true,
        paths: paths // Não é necessário aninhar dentro de outro array
    };
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
        aluno ?
        <div>
            <h1>Detalhes Alunos</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.name}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>

        : 

        false
        )
        
}