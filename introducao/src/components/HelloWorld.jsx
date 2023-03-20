import React from "react"

// V1
// function HelloWorld() {
//   return <div>
//     <h1>Teste</h1>
//   </div>
// }


//V2
// const HelloWorld = () => {
//     return (
//         <div>
//             <h1>Teste Com Arrow Function</h1>
//         </div>
//     )
// }

//codigo jsx linha 12 a 14


//V3
class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <h1>Teste classe</h1>
            </div>  
        )
    }
}



export default HelloWorld;