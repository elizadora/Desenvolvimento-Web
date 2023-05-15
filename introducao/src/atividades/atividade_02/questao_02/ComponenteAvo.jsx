import Filho from "./ComponenteFilho";
import MeuPokemon from "./MeuContexto";

const Avo = () =>{
    const numero = 92;

    return (
        <MeuPokemon.Provider value={numero}>
            <h2>Avo</h2>
                <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                alt="Pokemon"
                style={{width:"400px"}}
                />
            <Filho />
        </MeuPokemon.Provider>
    )
}

export default Avo;