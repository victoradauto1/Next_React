import { useContext } from "react";
import { IconeLua, IconeSol } from "../icons";
import useDataApp from "@/data/hook/useAppData";

export default function BotaoAlternartema() {

const {tema, alternarTema} = useDataApp()

  return tema === "dark" ? (
    <div
      onClick={alternarTema}
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
        `}
    >
      <div
        className={` 
            flex justify-center items-center
            bg-white text-yellow-600 w-6 h-6 rounded-full
            `}
      >
        {IconeSol(5)}
      </div>
      <div
        className={`
            hidden lg:flex item-center ml-4
            text-white
             `}
      >
        <span>Claro</span>
      </div>
    </div>
  ) : (
    
    <div
    onClick={alternarTema}
    className={`
      hidden sm:flex items-center cursor-pointer justify-end
      bg-gradient-to-r from-gray-500 to-gray-900
      w-14 lg:w-24 h-8 p-1 rounded-full
      `}
  >
    <div
      className={`
          hidden lg:flex item-center mr-2
          text-gray-300
           `}
    >
      <span>Escuro</span>
    </div>
    <div
      className={` 
          flex justify-center items-center
          bg-black text-yellow-600 w-6 h-6 rounded-full
          `}
    >
      {IconeLua(4)}
    </div>
  </div>
  );
}
