import MinhaCor from "./MeuContexto";

import FuncaoB from "./FuncaoB";
import FuncaoC from "./FuncaoC";


const FuncaoA = () => {
    const cores = {bkgA:"green", bkgB:"white", bkgC:"yellow", bkgD:"blue"};

    return(
        //context provider
        <MinhaCor.Provider value={cores}>
            <div>
                <h1 style={{backgroundColor: cores.bkgA}}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    );

}

export default FuncaoA;