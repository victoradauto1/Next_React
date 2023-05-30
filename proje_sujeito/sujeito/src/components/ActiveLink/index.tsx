import { ReactElement, cloneElement } from "react";
import { useRouter } from "next/router";
import Link, {LinkProps} from "next/link"

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps){

    const { asPath } = useRouter(); 

    const className = asPath === rest.href ? activeClassName : ""; // Se a rota for igual ao link que ele clicou , então ativamos o className

    return(
        <Link legacyBehavior {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>

    )
}