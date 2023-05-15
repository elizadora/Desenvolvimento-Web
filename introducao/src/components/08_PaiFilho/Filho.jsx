const Filho = (props) => {
    return (
        <>
            <h1>Componente Filho</h1>
            <h3>Mesada: {props.mesada}</h3>
            <button onClick={
                () => {
                    // alert("clicou");
                    props.enviarMensagemProPai("Obrigado");
                }
            }>Enviar</button>
        </>
    )
}

export default Filho;