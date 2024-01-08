import Link from "next/link";

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  onClick?: (event:any)=>void
  className?:string
}

export default function MenuItem(props: MenuItemProps) {

  function renderizarLink(){
    return(
      <div className={`
      flex flex-col justify-center items-center
      h-20 w-20 text-gray-600 ${props.className}
      `}
    >
      {props.icone}
      <span className={`
      text-xs font-light 
      `}>{props.texto}</span>
      </div>
    )
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.url?(<Link href={props.url}>
        {renderizarLink()}
      </Link>):(
        renderizarLink()      )}
      
    </li>
  );
}
