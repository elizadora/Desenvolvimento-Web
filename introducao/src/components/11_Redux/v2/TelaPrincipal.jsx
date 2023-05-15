import BotaoDecrementar from "./BotaoDecrementar";
import BotaoIncrementar from "./BotaoIncrementar";
import Imagem from "./Imagem";

const TelaPrincipal = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <table border="2 px">
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar />
                        </td>
                        <td>
                            <BotaoDecrementar />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TelaPrincipal;