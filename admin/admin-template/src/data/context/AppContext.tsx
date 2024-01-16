import { createContext, useEffect, useState } from "react";
 
interface AppContextType {
    tema?: string | null
    alternarTema?: ()=> void
}
 
const AppContext = createContext<AppContextType>({
    tema: '', 
});
 
export function AppProvider(props: any) {

  const [tema, setTema] =useState('')

    function alternarTema(){
      const novoTema = tema === ''? 'dark': ''
      setTema( novoTema)
      localStorage.setItem( "tema", novoTema)
    }

    useEffect(()=>{
      const temaSalvo= localStorage.getItem("tema")
      if (temaSalvo !== null) {
        setTema(temaSalvo);
      }
    },[])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
 
export default AppContext

