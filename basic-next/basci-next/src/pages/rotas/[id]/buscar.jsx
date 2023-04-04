import {useRouter } from 'next/router'

export default function  buscar() {
  const router = useRouter()
  const query = router.query.id

  console.log(router)
  
  return (
    <div> 
        <h1>rotas / {query} /buscar</h1></div>
  )
}
