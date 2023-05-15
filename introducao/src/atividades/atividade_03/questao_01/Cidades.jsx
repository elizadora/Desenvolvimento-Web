import { useEffect ,useState } from "react";



const Cidades = () => {
    const [fortaleza, setFortaleza] = useState(0);
    const [quixada, setQuixada] = useState(0);
    const [iguatu, setIguatu] = useState(0);
    const [sobral, setSobral] = useState(0);
    
    const [menor, setMenor] = useState("");
    const [maior, setMaior] = useState("");


    const updateFortaleza = () => setFortaleza((anterior) => anterior + 1);
    const updateQuixada = () => setQuixada((anterior) => anterior+ 1);
    const updateIguatu = () => setIguatu((anterior) => anterior + 1);
    const updateSobral = () => setSobral((anterior) => anterior + 1);



    useEffect(() => {
        let cidades = [fortaleza, quixada, iguatu, sobral];
        let nomes = ["Fortaleza", "Quixadá", "Iguatu", "Sobral"];
        let maior = cidades[0];
        let menor = cidades[0];

        for(let i = 0; i < cidades.length; i++){
            if(cidades[i] > maior) maior = cidades[i];
            if(cidades[i] < menor) menor = cidades[i];
        }
        setMaior("");
        setMenor("");
        for(let j = 0; j < nomes.length; j++){
            if(cidades[j] === maior) setMaior((anterior) => anterior + " " + nomes[j]);
            if(cidades[j] === menor) setMenor((anterior) => anterior + " " + nomes[j]);
        }

    }, [fortaleza, quixada, iguatu, sobral]);

    return (
        <div>
            <h1>Votação de Cidades</h1>
            <hr></hr>
            <h3>Fortaleza: {fortaleza}</h3>
            <h3>Quixadá: {quixada}</h3>
            <h3>Iguatu: {iguatu}</h3>
            <h3>Sobral: {sobral}</h3>

            <button onClick={updateFortaleza}>Votar Fortaleza</button>
            <button onClick={updateQuixada}>Votar Quixadá</button>
            <button onClick={updateIguatu}>Votar Iguatu</button>
            <button onClick={updateSobral}>Votar Sobral</button>

            <h3>Cidade mais votada: {maior} </h3>
            <h3>Cidade menos votada: {menor}</h3>
        </div>
    );
}

export default Cidades;