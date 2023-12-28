export function embaralhar(elementos:any[]):any[]{
    return(
        elementos
        .map(valor=>({valor, aleatorio: Math.random()}))
        .sort((objt1, objt2)=> objt1.aleatorio - objt2.aleatorio)
        .map(obj => obj.valor)
    )
}