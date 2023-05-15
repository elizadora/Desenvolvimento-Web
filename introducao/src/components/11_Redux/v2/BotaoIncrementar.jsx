import { useDispatch } from "react-redux";
import { incrementar, incrementarValor } from "./slices/idSlice";

const BotaoIncrementar = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <button onClick={() => dispatch(incrementar())} style={{width: "100%"}}>ID + 1</button>
            <button onClick={() => dispatch(incrementarValor(10))} style={{width: "100%"}}>ID + 10</button>
        </>
    );
}

export default BotaoIncrementar;