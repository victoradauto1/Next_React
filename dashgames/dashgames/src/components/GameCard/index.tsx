import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";
import { GamesProps } from "@/utils/types/games";

interface GameCardsProps {
  data: GamesProps;
}

export function GameCard({ data }: GameCardsProps) {
  return (
    <Link href={`/games/${data.id}`}>
      <section className="w-full bg-slate-200 roudend-lg p-4 mb-5">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
          className="rounded-lg object-cover"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>
        <div className="flex items-center mt-4 justify-between">
            <p className="text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden ">{data.title}</p>
            <BiRightArrowCircle size={24} color="#000"/>
        </div>
      </section>
    </Link>
  );
}
