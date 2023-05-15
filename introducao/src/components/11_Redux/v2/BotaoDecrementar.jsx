import { useDispatch } from "react-redux";
import { decrementar, decrementarValor } from "./slices/idSlice";


const BotaoDecrementar = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <button onClick={() => dispatch(decrementar())} style={{width: "100%"}}>ID - 1</button>
            <button onClick={() => dispatch(decrementarValor(10))} style={{width: "100%"}}>ID - 10</button>
        </>
    );
}

export default BotaoDecrementar;