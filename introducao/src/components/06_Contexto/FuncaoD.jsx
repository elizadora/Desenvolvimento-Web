import { useContext } from "react";
import MinhaCor from "./MeuContexto";

const FuncaoD = () => {
    const {cor, backgroundColor} = useContext(MinhaCor)

    return(
        //VERSAO 2(recomendada)
        <h1 style={{backgroundColor:backgroundColor, color:cor}}>Função B</h1>
    );

}

export default FuncaoD;