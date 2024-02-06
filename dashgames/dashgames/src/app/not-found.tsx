import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>VIA NAO ENCONTRADA</h2>
      <p>Esta pagina foi criada para rotas não encontradas</p>
      <Link href="/">Ir para Home</Link>
    </div>
  )
}