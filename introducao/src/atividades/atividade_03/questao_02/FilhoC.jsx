const FilhoC = ({vetor, setMedia}) => {
    const calcularMedia = () => {
        let soma = 0;

        for(let i = 0; i < vetor.length; i++){
            soma += vetor[i];
        }

        setMedia(soma / 5);
    }

    return (
        <button onClick={calcularMedia}>Calcular Média</button>
    );
}

export default FilhoC;