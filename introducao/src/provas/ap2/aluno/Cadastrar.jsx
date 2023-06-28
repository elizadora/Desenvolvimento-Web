import { Typography, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material"

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Cadastrar = () => {
    const [nome, setNome] = useState("") // textfield
    const [curso, setCurso] = useState("EC") // textfield
    const [ira, setIra] = useState(0.0) // textfield


    
    let navigate = useNavigate()


    // função que será executada quando o usuário clicar no botão cadastrar
    function handleSubmit(event){
        //previne o recarregamento da página
        event.preventDefault()
        const aluno = {
            nome,
            curso,
            ira
        }

        // envia os dados para o backend
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

                    type="number"

                    inputProps={{

                        maxLength: 10,
                        min: 0,
                        max: 10,
                        step: "0.1"

                    }}

                    // quando o usuário digitar algo no campo, o valor será armazenado na variável ira
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