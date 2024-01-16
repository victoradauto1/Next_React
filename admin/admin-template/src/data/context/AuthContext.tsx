import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '@/model/Usuario'
import router from 'next/router'
import Cookies from 'js-cookie'

interface AuthContextProps{
    usuario?: Usuario | null
    loginGoogle?: ()=> Promise<void>

}

const AuthContext = createContext<AuthContextProps>({})


async function usuarioNormalizado(usuarioFirebase: firebase.User| null ){
    if (!usuarioFirebase) {
        // Tratar o caso em que o usuário é nulo
        return null;
      }
    
      const token = await usuarioFirebase.getIdToken();
      return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId,
        imagemUrl: usuarioFirebase.photoURL,
      };

}

function gerenciarCookie(logado: string){
    if(logado){
        Cookies.set('admin-template-vs-auth', 'true',{
            expires: 7
        })
    } else{
        Cookies.remove('admin-template-vs-auth')
    }
}

export function AuthProvider({ children }: { children: React.ReactNode }){

    const[carregando, setCarregando] = useState(true)
    const[usuario, setUsuario] = useState<Usuario| null>()

    async function configurarSessao(usuarioFirebase: firebase.User| null){
        const usuario = await usuarioNormalizado(usuarioFirebase)
        if(usuarioFirebase?.email){
            gerenciarCookie("true")
            setUsuario(usuario)
            setCarregando(false)
            return usuario?.email
        }else{
            gerenciarCookie("false")
            setUsuario(null)
            setCarregando(false)
        }
    }

    async function loginGoogle(){
        const resp =  await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        
        if(resp.user?.email){
            const usuario = await usuarioNormalizado(resp.user)
            setUsuario(usuario)
            router.push("/")

        }
      
        
    }

    return(
        <AuthContext.Provider value={{
            usuario, 
            loginGoogle
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext