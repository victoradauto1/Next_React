export async function getStaticProps (){

    console.log("Gerando props para o componente")

    const res = await fetch("http://localhost:3000/api/produtos")
    const produtos = await res.json()

    return{
        props:{
            produtos
        }
    }
}

export default function estatico4 (props){

    function renderizarProdutos(){
        return props.produtos.map( produto => {
            return <li key={produto.id}> {produto.nome} tem preço de R$ {produto.preço} </li>
        })
    }

    return(
        <div>
            <h1>Estático#4</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}

