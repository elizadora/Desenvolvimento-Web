import { Typography, Box, TextField, Button, Checkbox, FormControl, InputLabel, Select, MenuItem, FormLabel, FormGroup, FormControlLabel } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom" //pega os parametros que sao passados pela url


const Editar = () => {
    
    let { id } = useParams()

    const [nome, setNome] = useState("") // textfield
    const [curso, setCurso] = useState("") // textfield
    const [titulacao, setTitulacao] = useState("GRAD") // select 
    const [ai, setAi] = useState({cg:false, mc:false, al:false ,es:false}) // checkbox

    let{cg, mc, al, es} = ai

    const navigate = useNavigate()

    useEffect(
        () =>{
            // let professor = getProfessoById(id)
            axios.get(`http://localhost:3001/professores/recuperar/${id}`)
            .then(
                (response) => {
                    let professor = response.data
                    setNome(professor.nome)
                    setCurso(professor.curso)
                    setTitulacao(professor.titulacao)
                    setAi(professor.ai)
                }
            )
            .catch( error => console.log(error))

        }, []
    )


    function handleSubmit(event){
        //previne o recarregamento da página
        event.preventDefault()
        
        const professor = {nome, curso, titulacao, ai}

        axios.put(`http://localhost:3001/professores/atualizar/${id}`, professor)
        .then(
            (response) =>{
                alert(`Professor ${nome} atualizado com sucesso`)
                navigate("/listarProfessor")
            }
        )
        .catch(error => console.log(error))
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
            <Typography variant="h5" fontWeight="bold">Editar Professor {id}</Typography>
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
                    value={nome}
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
                    value={curso}

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
                    sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2}}
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

export default Editar