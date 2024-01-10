import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className={`
    flex flex-col
    bg-gray-200 
    dark:bg-gray-900
    `}>
      <div
        className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20
            `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/Ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/Notificacoes" texto="Novidades" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem onClick={()=> console.log(`LogOut`)} texto="Sair" icone={IconeSair}
        className={`
        text-red-600 dark:text-red-400
        hover:bg-red-500 hover:text-white dark:hover:text-white
        `} />
      </ul>
    </aside>
  );
}
