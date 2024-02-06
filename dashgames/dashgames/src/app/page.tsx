import Image from "next/image";
import Container from "../components/container";
import { GamesProps } from "@/utils/types/games";
import Link from "next/link";
import { BsArrowRightSquare} from 'react-icons/bs'
import { Input } from "@/components/input";
import { GameCard } from "@/components/GameCard";

async function getDashGames() {
  try {
    const resp = await fetch(
      `https://sujeitoprogramador.com/next-api/?api=game_day`, {next:{revalidate:320}}
    );
    return resp.json();
  } catch (error) {
    throw new Error("Fail to import datas");
  }
}

async function getGamesData(){
  try {
    const resp = await fetch(
      `https://sujeitoprogramador.com/next-api/?api=games`, {next:{revalidate:320}}
      );
    return resp.json()
      
  } catch (error) {
    throw new Error("Fail to import datas");
  }
}

export default async function Home() {
  
  const dashGames: GamesProps = await getDashGames();
  const data: GamesProps[] = await getGamesData();


  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/games/${dashGames.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center">
                <p className="font-bold text-xl text-white">título {dashGames.title}</p>
                <BsArrowRightSquare size={24} color="#fff"/>
              </div>
              <Image
                src={dashGames.image_url}
                alt={dashGames.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-400"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>

        <Input/>


        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item)=>(
           <GameCard key={item.id} data={item}/>
          ))}
        </section>
      </Container>
    </main>
  );
}
