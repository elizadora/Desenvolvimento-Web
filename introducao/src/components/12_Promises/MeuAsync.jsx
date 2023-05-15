import { useEffect } from "react";

const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = false;
        if(x) resolve({msg: "Deu certo"});
        else reject({msg: "Deu errado"});
    }
)

const MeuAsync = () => {
    useEffect(
        () => {
            // minhaPromessa
            // .then(
            //     (response) => console.log(response.msg)
            // )
            // .catch(
            //     (error) => console.log(error.msg)
            // )

            getPromessa()
        }, []
    )

    async function getPromessa(){
        try{
            const data = await minhaPromessa;
            console.log(data.msg)
        }catch(error){
            console.log(error.msg)
        }
    }

    return(
        <h1>Testando async</h1>
    )
}

export default MeuAsync;