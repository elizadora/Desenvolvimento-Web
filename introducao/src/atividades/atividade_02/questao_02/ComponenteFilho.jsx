import { useContext } from "react";
import MeuPokemon from "./MeuContexto";
import Neto from "./ComponenteNeto";


const Filho = () => {
    const num = useContext(MeuPokemon);

    return(
        <div>
            <h2>Filho</h2>
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num + 1}.png`}
            alt="Pokemon"
            style={{width:"400px"}}
            />
            <Neto />
        </div>
    );
}

export default Filho;