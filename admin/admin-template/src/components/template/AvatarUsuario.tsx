import useAuth from '@/data/hook/useAuth'
import Link from 'next/link'

interface AvatarUsuarioProps{
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps){

    const {usuario} = useAuth()
    return(
        <div>
            <Link href="/Perfil">
                <img src={usuario?.imagemUrl ?? './images/usuarioImg.svg'} alt="Avatar do usuário" 
                className={`h-10 w-10 rounded-full cursor-pointer
                ${props.className}`}
                />
            </Link>
        </div>
    )
}