const MeusDados2 = (props) => {
    const {nome, curso, universidade} = props

    return(
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </div>

    )
}

export default MeusDados2;