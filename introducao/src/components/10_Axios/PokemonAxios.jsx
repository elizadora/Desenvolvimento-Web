import { useState, useEffect } from "react";
import axios from "axios";


const PokemonAxios = () => {
    
    const [nome, setNome] = useState("bulbasaur");
    const [back, setBack] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png");
    const [front, setFront] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
    const [id, setId] = useState(1);

    useEffect (
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    console.log(response.data);
                    setNome(response.data.name);
                    setFront(response.data.sprites.front_default);
                    setBack(response.data.sprites.back_default);
                }
            )
            .catch((error) => console.log(error));
        }, [id]
    )
    
    
    return (
        <>
            <table border="5px">
                <tbody>
                    <tr>
                        <td colSpan={2} style={{textAlign: "center"}}>
                            Nome: {nome} # {id}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={front} alt="front" style={{width: "300px"}}/>
                        </td>
                        <td>
                            <img src={back}  alt="back" style={{width: "300px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => setId((prev) => prev + 1)}> ID + 1</button>
                        </td>
                        <td>
                            <button onClick={() => setId((prev) => (prev - 1) < 1 ? 1 : prev - 1)}> ID - 1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );

}

export default PokemonAxios;