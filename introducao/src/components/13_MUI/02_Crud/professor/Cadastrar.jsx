import { Typography, Box, TextField, Button, Checkbox, FormControl, InputLabel, Select, MenuItem, FormLabel, FormGroup, FormControlLabel } from "@mui/material"

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Cadastrar = () => {
    const [nome, setNome] = useState("") // textfield
    const [curso, setCurso] = useState("") // textfield
    const [titulacao, setTitulacao] = useState("GRAD") // select 
    const [ai, setAi] = useState({cg:false, mc:false, al:false ,es:false}) // checkbox

    let{cg, mc, al, es} = ai
    
    let navigate = useNavigate()

    function handleSubmit(event){
        //previne o recarregamento da página
        event.preventDefault()

        const professor = {
            nome,
            curso,
            titulacao,
            ai
        }

        axios.post("http://localhost:3001/professores/cadastrar", professor)
        .then((response) => {
            alert(`Professor ID ${response.data._id} adicionado com sucesso`)
            navigate("/listarProfessor")
        })
        .catch(error => console.log(error))
        
        // console.log("Nome: " + nome + "\nCurso: " + curso)
        // console.log("Titulação: " + titulacao)
        // console.log("Áreas de Interesse: ")
        // console.log(ai)
    }

    function handleCheckbox(event){
        // nome da propriedade do objeto = valor da propriedade
        setAi({
            ...ai, 
            [event.target.name]: event.target.checked
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">Cadastrar Professor</Typography>
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
                    label = "Curso"

                    id = "curso"
                    name = "curso"

                    onChange={(event) => setCurso(event.target.value)}
                />

                <FormControl fullWidth required sx={{marginTop: 2}}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select 
                    labelId="select-tit-label" 
                    label="Titulação"
                    value={titulacao}

                    onChange={(event) => setTitulacao(event.target.value)}

                    >

                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{mt:2, ml:2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize: 12, mb:2}}>Áreas de Interesse </FormLabel> 
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg"  onChange={handleCheckbox}/>} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc"  onChange={handleCheckbox}/>} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al"  onChange={handleCheckbox}/>} label="Algoritmos"/>
                        <FormControlLabel control={<Checkbox checked={es} name="es"  onChange={handleCheckbox}/>} label="Engenharia de Software" />


                    </FormGroup>
                </FormControl>

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