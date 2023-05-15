import React from "react";


// Function
// function MeusDados1() {
//     return(
//         <div>
//             <h1>Nome: Elizadora Mendonça</h1>
//             <h1>Curso: Ciência da Computação</h1>
//             <h1>Universidade: Universidade Federal do Ceará</h1>
//         </div>
//     );
// }



// Arrow Function com return
// const MeusDados1 = () => {
//     return (
//         <div>
//             <h1>Nome: Elizadora Mendonça</h1>
//             <h1>Curso: Ciência da Computação</h1>
//             <h1>Universidade: Universidade Federal do Ceará</h1>
//         </div>
//     )
// }


//Arrow Function sem return
// const MeusDados1 = () => {
//         <div>
//             <h1>Nome: Elizadora Mendonça</h1>
//             <h1>Curso: Ciência da Computação</h1>
//             <h1>Universidade: Universidade Federal do Ceará</h1>
//         </div>
// }


class MeusDados1 extends React.Component {
    render(){
        return(
            <div>
                <h1>Nome: Elizadora Mendonça</h1>
                <h1>Curso: Ciência da Computação</h1>
                <h1>Universidade: Universidade Federal do Ceará</h1>
            </div>
        )
    }
}


export default MeusDados1;