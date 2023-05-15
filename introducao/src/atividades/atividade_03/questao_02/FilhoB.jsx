const FilhoB = ({vetor, setMenor}) => {
    const calcularMenor = () => {
        let menor = vetor[0];

        for(let i = 1; i < vetor.length; i++){
            if(vetor[i] < menor) menor = vetor[i];
        }

        setMenor(menor);
    }

    return (
        <button onClick={calcularMenor}>Calcular Menor</button>
    );
}

export default FilhoB;