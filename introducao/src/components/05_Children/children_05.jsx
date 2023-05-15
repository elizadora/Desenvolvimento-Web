import { Children, cloneElement } from "react"


// const Supermercado = (props) => {
//     return(
//         <div>
//             <h1>Supermercado {props.nome}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Supermercado = ({children, nome}) => {
//     return(
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {
//                 Children.map(children, (filho) => {
//                     return(
//                         <div style={{color:"red"}}>
//                             {filho}
//                             <h4 style={{color:"blue"}}>É um real a palma da banana</h4>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     )
// }


const Supermercado = ({children, nome}) => {
    return(
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(children, (filho) => {
                    return cloneElement(filho, (supermercado=nome))
                })
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => {
    return(
        <div>
            <h3>Legume {nome} do supermercado {supermercado}</h3>
        </div>
    )
}


const Bebida = ({nome, supermercado}) => {
    return(
        <div>
            <h3>Bebida {nome} do supermercado {supermercado}</h3>
        </div>
    )
}


export {Supermercado, Legume, Bebida};