import Container from "@/components/container";
import Image from "next/image";
import userImg from "public/user.png"
import { FaShareAlt } from "react-icons/fa"

export default function Profile(){
    return(
        <main className="w-full text-black">
            <Container>
               <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center">
                    <Image
                    src={userImg}
                    alt="Profile user image"
                    className="rounded-full w-56 h-56 object-cover"
                    />
                </div>
                <h1 className="font-bold text-2xl">Player</h1>
                <div>
                    <button>
                        configurações
                    </button>
                    <button>
                        <FaShareAlt size={24} color="#fff"/>
                    </button>
                </div>
               </section>
            </Container>
        </main>
    )
}