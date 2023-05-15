const Filho = (props) => {
    const {altura, peso} = props;

    const imc = (altura, peso) => peso/(altura * altura);

    const resultado = (imc) =>{
        if(imc < 18){
            return <h3>Abaixo do peso ideal</h3>
        }else if(imc > 25){
            return <h3>Acima do peso</h3>
        }else{
            return <h3>Peso ideal</h3>
        }
    }  
    
    return (
        <div>
            {resultado(imc(altura, peso))}
        </div>
    );
}

export default Filho;