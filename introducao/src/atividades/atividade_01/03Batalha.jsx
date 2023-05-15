import Cachorro from './../../assets/cachorro.png';
import Gato from './../../assets/gato-preto.jpg';
import { Children, cloneElement } from 'react';

const Hero = ({nome, img}) => {
    return (
        <div>
            <h4>Nome: {nome}</h4>
            <img src={img}/>
        </div>
    );
}

const Enemy = ({nome, img}) => {
    return (
        <div>
            <h4>Nome: {nome}</h4>
            <img src={img}/>
        </div>
    );
}

const Arena = () => {
    return (
        <div>
            <Hero nome="Xuxa" img={Cachorro} />
            <Enemy nome="Joelma" img={Gato} />
        </div>
    );
}


const Arena2 = ({nome, children}) => {
    return (
        <div>
            <h1>Arena: {nome}</h1>
            {
                Children.map(children, (child) =>{
                        return (
                            //repassa a propriedade nome para o clone dos elementos filhos de arena
                            cloneElement(child, {arena:nome})
                        )
                    }   
                )
            }
        </div>
    );
}

const World = (props) =>{
    return (
        <>
            {props.children}
        </>
    )
}

export {World, Arena, Enemy, Hero, Arena2}