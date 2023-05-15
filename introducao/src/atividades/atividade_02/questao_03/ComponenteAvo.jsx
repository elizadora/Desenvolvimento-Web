import { useState } from "react";
import Filho from "./ComponenteFilho";
import MeuPokemon from "./MeuContexto";
import "./style.css";

const Avo = () =>{
    const [contador, setContador] = useState(1);

    const Next = () => {
        setContador(contador + 1);
    }

    const Back = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }
    

    return (
        <MeuPokemon.Provider value={contador}>
            <div className="teste">
                <div className="buttons" >
                    <button onClick={Back} className="button-back">VOLTAR</button>
                    <button onClick={Next} className="button-next">PRÓXIMO</button>
                </div>
                <div className="pokemons">
                <div id="pokemon1">
                <h2>{contador}</h2>
                    <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
                    alt="Pokemon"
                    style={{width:"400px"}}
                    />
                </div>
                <Filho />
                </div>
            </div>
        </MeuPokemon.Provider>
    )
}

export default Avo;