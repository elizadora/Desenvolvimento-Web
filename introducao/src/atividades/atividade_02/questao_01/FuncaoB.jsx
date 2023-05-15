import MinhaCor from "./MeuContexto";

const FuncaoB = () => {
    return(
        // VERSAO 1
        <MinhaCor.Consumer>
            {
                ({bkgB}) => {
                    return(
                        <h1 style={{backgroundColor:bkgB}}>Função B</h1>
                    )
                }
            }
        </MinhaCor.Consumer>
    );

}

export default FuncaoB;