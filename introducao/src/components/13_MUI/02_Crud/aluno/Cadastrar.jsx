import { Typography, Box, TextField, Button} from "@mui/material"

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Cadastrar = () => {
    const [nome, setNome] = useState("") // textfield
    const [ira, setIra] = useState(0.0)


    
    let navigate = useNavigate()

    function handleSubmit(event){
        //previne o recarregamento da página
        event.preventDefault()
        const aluno = {
            nome,
            ira
        }

        axios.post("http://localhost:3001/alunos/cadastrar", aluno)
        .then((response) => {
            alert(`Aluno ID ${response.data._id} adicionado com sucesso`)
            navigate("/listarAluno")
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">Cadastrar Aluno</Typography>
            <Box
                sx={{ width: "80%" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    autoFocus   
                    label = "Nome Completo"

                    id = "nome"
                    name = "nome"

                    // quando o usuário digitar algo no campo, o valor será armazenado na variável nome
                    onChange={(event) => setNome(event.target.value)}
                />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label = "IRA"

                    id = "ira"
                    name = "ira"

                    type="number"

                    inputProps={{

                        maxLength: 10,
                        min: 0,
                        max: 10,
                        step: "0.1"

                    }}

                    onChange={(e) =>setIra(parseFloat(e.target.value))}
                />

                <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2}}
                >
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Cadastrar