import Image from "next/image";
import HeroImg from "@/app/assets/hero.svg"

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)}">
      <h2 className="font-medium text-xl mb-2">Gerencie sua empresa</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:4-xl">Atendimentos, clientes</h1>
      <Image 
      src={HeroImg} 
      alt="Atendimento de clientes"
      width={600}
      className="max-w-sm md:max-w-xl "
      />
    </main>
  );
}
