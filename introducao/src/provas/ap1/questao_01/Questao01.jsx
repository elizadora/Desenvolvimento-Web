import { useEffect, useState } from "react";

function Questao01X() {

    const [medias, setMedias] = useState([]);

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ];


    const imprimirAprovados = () => {
        // realiza o filtro dos alunos aprovados de forma que
        // pega o aluno da lista e o index respectivo dele
        // mendiante o index do aluno acessa o array de media e
        // realiza a verificacao, caso passe retorna para a const aprovados
        const aprovados = alunos.filter((aluno, index) => {
            return medias[index] >= 7;
        });

        //imprime os alunos aprovados
        return (
            <ul>
                {aprovados.map((aluno) => {
                    return <p key={aluno.nome}>{aluno.nome}</p>
                })}
            </ul>
        );
    }



    return (
        <>
            <h1>Questão 01</h1>
            <Questao01Y  alunos={alunos} setMedia={setMedias}/>
            <h2>Alunos Aprovados</h2> 
            {imprimirAprovados()}  
        </>

    );
}


const Questao01Y = ({alunos, setMedia}) => {
    //realiza o calculo da media de cada aluno utilizando o map
    // o useEffect é executado apenas uma vez na construcao do componente
    useEffect(() => {
        const medias = alunos.map((aluno) => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
            return media;
        });
        setMedia(medias);

    }, []);


    return (
        <>

        </>
    );
}


export { Questao01X, Questao01Y};