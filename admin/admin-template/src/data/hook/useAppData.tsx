import { useContext } from "react";
import AppContext from "../context/AppContext";

function useDataApp(){
    return useContext(AppContext)
}

export default useDataApp