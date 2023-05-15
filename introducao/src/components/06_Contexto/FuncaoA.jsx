import MinhaCor from "./MeuContexto";

import FuncaoB from "./FuncaoB";
import FuncaoC from "./FuncaoC";


const FuncaoA = () => {
    const cores = {cor: "gray", backgroundColor: "snow"};

    return(
        //context provider
        <MinhaCor.Provider value={cor}>
            <div>
                <h1 style={{backgroundColor:cor.backgroundColor, color:cor.cor}}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    );

}

export default FuncaoA;