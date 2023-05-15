// useSelector é utilizado para acessar o estado geral da aplicação
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Imagem = () => {
    const id = useSelector(
        (state) => state.id.value
    )
    const [nome, setNome] = useState("");

    useEffect (
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    console.log(response.data);
                    setNome(response.data.name);
                }
            )
            .catch((error) => console.log(error));
        }, [id]
    )

    return (
        <>
            <h1>ID: {id}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={nome}
                style={{width: "300px"}}
            />
            <h3>{nome}</h3> 
        </>
    );
}

export default Imagem;