import { useContext } from "react";
import MeuPokemon from "./MeuContexto";

const Neto = () =>{
    const num = useContext(MeuPokemon);
    return (
        <div id="pokemon3">
            <h2>{num+2}</h2>
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num + 2}.png`}
            alt="Pokemon"
            style={{width:"400px"}}
            />
        </div>
    )
}

export default Neto;