const SaveData = () => {
    
    const saveData = () => {
        const aluno = {
            matricula: "00011", 
            nome: "Jefferson", 
            curso: "Sistema de Informação"
        }
        
        // Salvando em session Storage(os dados são apagados após o fim da sessão)
        // sessionStorage.setItem(aluno.matricula, JSON.stringify(aluno));

        localStorage.setItem(aluno.matricula, JSON.stringify(aluno));
    }


    
    return (
        <>
            <h1>Salvando Dados...</h1>
            <button onClick={saveData}>Salvar</button>
        </>
    )
}

{/* <button onClick={saveData}>Salvar</button> esta enviando uma referencia a função saveData */}
// {loadData()} chamando a função para executar 

const LoadData = () =>{
    const loadData = () => {
       const aluno = JSON.parse(localStorage.getItem("00011"));
       return(
            <>
                <h3>Nome: {aluno.nome}</h3>
                <h3>Curso: {aluno.curso}</h3>
            </>
       )
    }


    return(
        <>
            <h1>Carregando Dados...</h1>
            {loadData()}
        </>
    )
}

export {SaveData, LoadData};