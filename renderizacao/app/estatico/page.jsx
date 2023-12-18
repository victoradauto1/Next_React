'use client';

import { useState, useEffect } from "react"

export default function Estatico1 (){

   const [num, setNum] = useState(0)

   useEffect(()=>{

        setNum(Math.random())

   },[])

    return (
        <div>
            <h1> Estático#1 </h1>
            <h2>{num}</h2>
        </div>
    )
}