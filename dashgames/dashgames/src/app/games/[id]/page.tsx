import { GamesProps } from "@/utils/types/games";
import { redirect } from "next/navigation";
import Image from "next/image";
import Container from "@/components/container";
import { Label } from "./components/label";
import { GameCard } from "@/components/GameCard";
import { Metadata} from "next";

interface PropsParams{
  params: { id: string}
}

export async function generateMetadata({params}: PropsParams): Promise<Metadata>{
  try {
    const res = await fetch(
      "https://sujeitoprogramador.com/next-api/?api=games", {next:{revalidate: 60}}
    );

    const data = await res.json();

    const foundItem: GamesProps | undefined = data.find(
      (item: GamesProps) => item.id.toString() === params.id
    );

    if (!foundItem) {
      return{
        title: "DashGames - Encontre seu jogo!"
      }
    } else {
      return{
        title: foundItem.title,
        description: `${foundItem.description.slice(1,100)}`,
        openGraph:{
          title: foundItem.title,
          images:[foundItem.image_url]
        }
      }
    }
  
  } catch (error) {
    return{
      title: "DashGames - Encontre seu jogo!"
    }

}}

async function getData(id: string) {
  try {
    const res = await fetch(
      "https://sujeitoprogramador.com/next-api/?api=games", {next:{revalidate: 60}}
    );
    const data = await res.json();

    const foundItem: GamesProps | undefined = data.find(
      (item: GamesProps) => item.id.toString() === id
    );

    if (!foundItem) {
      throw new Error("Item não encontrado");
    }

    return foundItem;
  } catch (error) {
  
    throw new Error("Falha ao buscar dados");
  }
}

async function getGameSorted() {
  try {
    const res = await fetch(
      `https://sujeitoprogramador.com/next-api/?api=game_day`, {cache: "no-store"}
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function GameDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const data: GamesProps = await getData(id);
    const sortedGame: GamesProps = await getGameSorted();

    return (
      <main className="w-full text-black">
        <div className="bg-black w-full h-80 sm:h-96 relative">
          <Image
            className="object-cover w-full h-80 sm:h-96 opacity-70"
            src={data.image_url}
            alt={data.title}
            priority={true}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>
        <Container>
          <h1 className="font-bold text-xl m-4">{data.title}</h1>
          <p>{data.description}</p>

          <h2 className="font-bold text-xl mt-7 mb-2">Plataformas</h2>
          <div className="flex gap-2 flex-wrap">
            {data.platforms.map((item) => (
              <Label name={item} key={item} />
            ))}
          </div>

          <h2 className="font-bold text-xl mt-7 mb-2">Categorias</h2>
          <div className="flex gap-2 flex-wrap">
            {data.categories.map((item) => (
              <Label name={item} key={item} />
            ))}
          </div>

          <p className="mt-7 mb-2">
            <strong>Data de lançamento:</strong> {data.release}
          </p>

          <h2 className="font-bold text-xl mt-7 mb-2">Jogo recomendado</h2>
          <div className="flex">
            <div className="flex-grow">
              <GameCard data={sortedGame}/>
            </div>
          </div>
        </Container>
      </main>
    );
  } catch (error) {
    redirect("/");
  }
}
