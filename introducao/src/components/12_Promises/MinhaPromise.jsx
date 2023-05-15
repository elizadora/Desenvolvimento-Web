const { useEffect } = require("react");

// criacao do objeto promessa
const minhaPromise = new Promise(
    (resolve, reject) => {
        // alguma logica que está produzindo algo e que demora algum tempo
        //emulando uma computação demorada...
        setTimeout(
            () => {

                const x = 11;

                if(x % 2 === 0) resolve({numero:x, msg:"Deu certo"});
                else reject({numero:x, msg:"Deu errado"});

            }, 3000
        )

    }
)

//axios.get retorna uma promessa

function meuGet(url){
    console.log(url);
    return minhaPromise;
}



const MinhaPromise = () => {
    
    useEffect (
        () => {
            // meuGet("http://...")
            // .then(
            //     (response) => console.log(response)
            // )
            // .catch(
            //     (error) => console.log(error)
            // )

            meuGet("http://...")
            .then(
                (response) => {
                    console.log(response.numero)
                    console.log(response.msg)
                }
            )
            .catch(
                (error) => {
                    console.log(error.numero)
                    console.log(error.msg)
                }
            )


        }, []
    )
    
    
    return(
        <>
            <h1>Testando promessa!</h1>
        </>
    )
}


export default MinhaPromise;