import { useState } from "react";

const Questao03 = () => {

    const [menorPopulacao, setMenorPopulacao] = useState()
    const [maiorPopulacao, setMaiorPopulacao] = useState()

    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (data) => {
                // armazena a maior e menor populacao
                let maiorPopulacao = data[0].population;
                let menorPopulacao = data[0].population;
                
                // armazena os respectivos indices da maior e menor populacao
                let maiorPopulacaoIndex = 0;
                let menorPopulacaoIndex = 0;
                    
                // percorre o array e faz as verificacoes de maior e menor populacao
                for (let i = 0; i < data.length; i++) {
                    if (data[i].population > maiorPopulacao) {
                        maiorPopulacao = data[i].population;
                        maiorPopulacaoIndex = i;
                    }

                    if (data[i].population < menorPopulacao) {
                        menorPopulacao = data[i].population;
                        menorPopulacaoIndex = i;
                    }
                }

                //seta os valores de maior e menor populacao
                setMaiorPopulacao(data[maiorPopulacaoIndex].capital[0]);
                setMenorPopulacao(data[menorPopulacaoIndex].capital[0]);

            }
        )
        .catch(error => console.log(error))

    return (
        <>
            <h1>Questão 03</h1>
            <h2>Menor População</h2>
            <p>{menorPopulacao}</p>
            <h2>Maior População</h2>
            <p>{maiorPopulacao}</p>
        </>
    )
}

export default Questao03;