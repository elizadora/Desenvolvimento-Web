import { useContext } from "react";
import MeuPokemon from "./MeuContexto";
import Neto from "./ComponenteNeto";


const Filho = () => {
    const num = useContext(MeuPokemon);

    return(
        <div className="pokemons">
            <div id="pokemon2">
                <h2>{num+1}</h2>
                <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num + 1}.png`}
                alt="Pokemon"
                style={{width:"400px"}}
                />
            </div>
            <Neto />
        </div>
    );
}

export default Filho;