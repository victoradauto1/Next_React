
export function getServerSideProps(){
    return{
        props:{
            numero: Math.random()
        }
    }
}

export default function Dinamico1 (props){

    return(
        <div>
            <h1>Dinâmico#1</h1>
            <h2>Número {props.numero}</h2>

        </div>
    )
}

