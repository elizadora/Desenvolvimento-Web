import { useEffect, useState } from "react";

const Contador = () => {

    //estados são utilizados toda vez que alteramos a interface do usuário
    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true);

    const incrementar = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        if(contador % 2 === 0) setEhPar(true);
        else setEhPar(false)

    }, [contador]);

    return (
        <>
            <h1>Contador: {contador} </h1>
            <h1>É Par: {ehPar + ""}</h1>
            <button onClick={incrementar}> Contar + 1</button>
        </>
    )
}

export default Contador;