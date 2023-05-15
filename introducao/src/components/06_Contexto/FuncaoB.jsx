import MinhaCor from "./MeuContexto";

const FuncaoB = () => {
    return(
        // VERSAO 1
        <MinhaCor.Consumer>
            {
                ({cor, backgroundColor}) => {
                    return(
                        <h1 style={{backgroundColor:cor, color:backgroundColor}}>Função B</h1>
                    )
                }
            }
        </MinhaCor.Consumer>
    );

}

export default FuncaoB;