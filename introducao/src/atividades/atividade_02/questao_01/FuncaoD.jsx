import { useContext } from "react";
import MinhaCor from "./MeuContexto";

const FuncaoD = () => {
    const cor = useContext(MinhaCor)

    return(
        //VERSAO 2(recomendada)
        <h1 style={{backgroundColor: cor.bkgD}}>Função B</h1>
    );

}

export default FuncaoD;