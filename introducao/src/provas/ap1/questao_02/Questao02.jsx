import { useState } from "react";

const Questao2 = () => {
    
    const [turn, setTurn] = useState(true);
    
    return (
        <>
            <h1>Questao 2</h1>
            {/* imagem que recebe a url do pokemon
                utiliza operador ternario para checar se o pokemon esta de frente ou de costas
            */}
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${turn ? "" : "back/"}94.png`} />

            <button onClick={() => setTurn(!turn)}>Virar</button>

        </>
    );
}


export default Questao2;