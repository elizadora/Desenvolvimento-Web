import { useEffect ,useState } from "react";



const Cidades2 = () => {
    const [cidades, setCidades] = useState([
        {nome: "Fortaleza", votos: 0},
        {nome: "Quixadá", votos: 0},
        {nome: "Iguatu", votos: 0},
        {nome: "Sobral", votos: 0}
    ]);

    const [flag, setFlag] = useState(false);

    //melhor perfomance
    const votarCidade = (nome) => {
        // for(let i = 0; i < cidades.length; i++){
        //     if(cidades[i].nome === nome){
        //         cidades[i].votos = cidades[i].votos + 1;
        //     }
        // }

        const index = cidades.findIndex(
            (cidade) => cidade.nome == nome 
        )  
        
        cidades[index].votos = cidades[index].votos + 1;

        //serve para atualizar a variavel flag e assim como efeito colateral ele atualiza o vetor de cidades
        setFlag((flagAnterior) => !flagAnterior);
        setCidades(cidades);
    }


    const votarCidade2 = (nome) => {
        const newCidades = cidades.map(
            (item) => {
                if(item.nome == nome) return {...item, votos: item.votos + 1};
                return {...item};
            }
        )

        setCidades(newCidades);
    }



    const [menor, setMenor] = useState("");
    const [maior, setMaior] = useState("");


    return (
        <div>
            <h1>Votação de Cidades</h1>
            <hr></hr>
            <h3>{cidades[0].nome}: {cidades[0].votos}</h3>
            <h3>{cidades[1].nome}: {cidades[1].votos}</h3>
            <h3>{cidades[2].nome}: {cidades[2].votos}</h3>
            <h3>{cidades[3].nome}: {cidades[3].votos}</h3>

            <button onClick={() => votarCidade2("Fortaleza")}>Votar Fortaleza</button>
            <button onClick={() => votarCidade2("Quixadá")}>Votar Quixadá</button>
            <button onClick={() => votarCidade2("Iguatu")}>Votar Iguatu</button>
            <button onClick={() => votarCidade2("Sobral")}>Votar Sobral</button>

            {/* <h3>Cidade mais votada: {maior} </h3> */}
            {/* <h3>Cidade menos votada: {menor}</h3> */}
        </div>
    );
}

export default Cidades2;