import AuthInput from "@/components/Auth/AuthInput";
import { IconeAtencao } from "@/components/icons";
import {useState } from "react";
import useAuth from "@/data/hook/useAuth";
interface AutenticacaoProps {}

export default function Autenticacao(props: AutenticacaoProps) {
  const { cadastrarUsuario, login, loginGoogle } = useAuth();

  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {

  
      if (modo === "login") {
        if (login) {
          login(email, senha);
          exibirError("ocorreuu um erro no Login");
        }
      } else {
        if (cadastrarUsuario) {
          cadastrarUsuario(email, senha);
          exibirError("ocorreu um erro no cadastro");
        }
      }
    }
   

  function exibirError(msg:any , tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  return (
    <div className={`flex h-screen items-center justify-center `}>
      <div className={`hidden md:block w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random/"
          alt="Imagem da Tela de Autenticação"
          className={`
          h-screen w-full object-cover
          `}
        />
      </div>
      <div className={`md:w-1/2 w-full m-10 lg:w-1/3`}>
        <h1
          className={`
            text-3xl font-bold mb-5 
            `}
        >
          {modo === "login"
            ? "Entre com a Sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {erro ? (
          <div
            className={`
        bg-red-300 text-white py-3 px-5 my-2 flex flex-row items-center justify-center border border-red-700 rounded-lg
        `}
          >
            {IconeAtencao(10)}
            <span className={`m-2`}>{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="E-mail"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <h1>Autenticação</h1>
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button
          onClick={submeter}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
            `}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button
          onClick={loginGoogle}
          className={`
            w-full bg-red-500 hover:bg-red-400
            text-white rounded-lg px-4 py-3
            `}
        >
          Logar com Google
        </button>
        {modo === "login" ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                `}
            >
              {" "}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}
            >
              {" "}
              Faça o login com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
