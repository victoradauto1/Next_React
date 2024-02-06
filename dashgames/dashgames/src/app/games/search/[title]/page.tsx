import { GameCard } from "@/components/GameCard";
import Container from "@/components/container";
import { Input } from "@/components/input";
import { GamesProps } from "@/utils/types/games";

async function getData(title: string): Promise<GamesProps[] | null> {
  try {
    const res = await fetch(
      "https://sujeitoprogramador.com/next-api/?api=games"
    );
    const data = await res.json();
    
    const titleDecode = decodeURI(title)
   
    // Filtrar os itens com base no título
    const filteredData = data.filter((item: GamesProps) => {
      return item.title.toLowerCase().includes(titleDecode.toLowerCase());
    });

    return filteredData.length > 0 ? filteredData : null;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GamesProps[] | null = await getData(title);

  return (
    <main className="w-full text-black ">
      <Container>
        <Input/>
        <h1 className="font-bold text-xl mt-8 mb-5">Aqui está o resultado da sua busca:</h1>
        {games? (
          <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
        ):(
          <p>Não encontramos nada com base na sua busca.</p>
        )}
      </Container>
    </main>
  );
}
