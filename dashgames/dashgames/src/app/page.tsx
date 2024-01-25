import Image from "next/image";
import Container from "../components/container";
import {GamesProps} from '@/utils/types/games'
import Link from 'next/link'


async function getDashGames(){
  try {
    const resp = await fetch(`https://sujeitoprogramador.com/next-api/?api=game_day`)
    return resp.json() 
    
  } catch (error) {
    throw new Error("Fail to import datas")
    
  }
 
}

export default async function Home() {

  const dashGames: GamesProps = await getDashGames()

  console.log(dashGames)
  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você</h1>
        <Link href={`/games/${dashGames.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image 
            src={dashGames.image_url} 
            alt={`${dashGames.title}`}
            width={100}
            height={100}
            quality={100}
            />
          </section>
        </Link>
      </Container>
    </main>
  );
}
