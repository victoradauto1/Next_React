export function getStaticProps (){

    return{
        revalidate: 30,
        props: {
            numero: Math.random(),
            nome: "Victor"
        }
    }
}

export default function estatico3 (props){
    return(
        <div>
            <h1>Estático#3</h1>
            <h2> Nome {props.nome}</h2>
            <p> Sequência {props.numero}</p>
        </div>
    )
}

