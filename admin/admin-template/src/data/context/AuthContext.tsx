import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "@/model/Usuario";
import router from "next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario | null;
  carregando?: boolean
  cadastrarUsuario?: (email: string, senha: string)=> Promise<void>
  login?: (email: string, senha: string)=> Promise<void>
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
  
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: firebase.User | null) {
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

function gerenciarCookie(logado: string) {
  if (logado) {
    Cookies.set("admin-template-vs-auth", "true", {
      expires: 7,
    });

  } else {
    Cookies.remove("admin-template-vs-auth");

  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario | null>();

  async function configurarSessao(usuarioFirebase: firebase.User | null) {
    const usuario = await usuarioNormalizado(usuarioFirebase);
    if (usuarioFirebase?.email) {
      gerenciarCookie("true");
      setUsuario(usuario);
      setCarregando(false);
      return usuario?.email;
    } else {
      gerenciarCookie("false");
      setUsuario(null);
      setCarregando(false);
    }
  }

  async function cadastrarUsuario(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      router.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function login(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      router.push("/");
    }
     finally {
      setCarregando(false);
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp.user);
      router.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-vs-auth")) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        cadastrarUsuario,
        login,
        loginGoogle,
        logout,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
