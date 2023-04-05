import Link from 'next/link'

const index = () => {
  return (
    <div>
        <h1>Rota para index</h1>
        <ul>
          <Link href="/rotas/params?id=12&nome=Ana">
          <li>Params</li>
          </Link>
        </ul>
    </div>
  )
}

export default index