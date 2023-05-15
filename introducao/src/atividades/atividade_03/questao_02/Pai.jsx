import { useState } from "react";
import FilhoA from "./FilhoA";
import FilhoB from "./FilhoB";
import FilhoC from "./FilhoC";

const Pai = () => {
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);
    const [media, setMedia] = useState(0);

    return (
        <>
            <h1>Cálculo vetor</h1>
            <h3>Maior: {maior}</h3>
            <h3>Menor: {menor}</h3>
            <h3>Média: {media}</h3>

            <FilhoA vetor={[2, 3, 6, 9, 1]} setMaior={setMaior}/>
            <FilhoB vetor={[2, 3, 6, 9, 1]} setMenor={setMenor}/>
            <FilhoC vetor={[2, 3, 6, 9, 1]} setMedia={setMedia}/>
        </>
    );
}

export default Pai;