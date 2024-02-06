"use client"
import { FormEvent, useState } from "react"
import { BsSearch } from 'react-icons/bs'
import { useRouter} from 'next/navigation'

export function Input(){

    const [input, setInput] = useState("")
    const router = useRouter()

    function handleSearch(e: FormEvent){
        e.preventDefault();

        if(input === '') return

        router.push(`/game/search/${input}`)
    }

    return(
        <form 
        onSubmit={handleSearch} 
        className="flex flex-row w-full justify-between gap-2 bg-slate-200 px-4 py-2 items-center my-5 rounded-lg"
        >
            <input 
            type="text"
            placeholder="Digite um jogo do seu interesse..." 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className="bg-slate-200 outline-none  h-10 w-2/5 px-3 py-2"
            />
            <button type="submit"> 
            <BsSearch
            size={24}
            color="#ea580c"
            />
            </button>
        </form>
    )
}