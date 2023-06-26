import { Typography, Box, TextField, Button } from "@mui/material"

import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Editar = () => {

    let {id} = useParams()

    const [nome, setNome] = useState("") // textfield
    const [ira, setIra] = useState(0.0)

    
    let navigate = useNavigate()

    useEffect(
        () =>{
            axios.get(`http://localhost:3001/alunos/recuperar/${id}`)
            .then(
                (response) => {
                    let aluno = response.data
                    setNome(aluno.nome)
                    setIra(aluno.ira)
                }
            )
            .catch( error => console.log(error))

        }, []
    )



    function handleSubmit(event){
        //previne o recarregamento da página
        event.preventDefault()
        const aluno = {
            nome,
            ira
        }

        axios.put(`http://localhost:3001/alunos/atualizar/${id}`, aluno)
        .then(
            (response) =>{
                alert(`Aluno ${nome} atualizado com sucesso`)
                navigate("/listarAluno")
            }
        )
        .catch(error => console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">Editar Aluno</Typography>
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

                    value = {nome}

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

                    value = {ira}

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
                        Editar
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Editar