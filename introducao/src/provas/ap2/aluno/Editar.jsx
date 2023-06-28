import { Typography, Box, TextField, Button, FormControl, MenuItem, InputLabel, Select } from "@mui/material"

import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


const Editar = () => {

    let {id} = useParams()

    const [nome, setNome] = useState("") // textfield
    const [curso, setCurso] = useState("") // textfield
    const [ira, setIra] = useState(0.0) // textfield

    
    let navigate = useNavigate()

    // função que será executada quando o usuário clicar no botão Editar
    useEffect(
        () =>{
            axios.get(`http://localhost:3001/alunos/recuperar/${id}`)
            .then(
                (response) => {
                    let aluno = response.data
                    setNome(aluno.nome)
                    setCurso(aluno.curso)
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
            curso,
            ira
        }

        // envia os dados para o backend
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

                    onChange={(event) => setNome(event.target.value)}
                />
                <FormControl fullWidth required sx={{mt: 2}}>
                    <InputLabel id="curso-select">Curso</InputLabel>
                    <Select
                    labelId="curso-select"
                    label="Curso"

                    value={curso}
                    onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="EC">EC</MenuItem>
                        <MenuItem value="CC">CC</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="DD">DD</MenuItem>
                        <MenuItem value="RC">RC</MenuItem>
                    </Select>
                </FormControl>
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