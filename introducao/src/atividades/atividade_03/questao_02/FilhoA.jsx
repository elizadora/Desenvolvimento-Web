const FilhoA = ({vetor, setMaior}) => {
    const calcularMaior = () => {
        let maior = vetor[0];

        for(let i = 1; i < vetor.length; i++){
            if(vetor[i] > maior) maior = vetor[i];
        }

        setMaior(maior);
    }

    return (
        <button onClick={calcularMaior}>Calcular Maior</button>
    );
}

export default FilhoA;