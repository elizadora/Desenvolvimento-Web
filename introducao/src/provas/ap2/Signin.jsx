import { Box, Typography, TextField, Container, Button, Link } from "@mui/material"
import { useState } from "react"
import axios from "axios"

import { useNavigate } from "react-router-dom"

const Signin = (props) => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    let navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        const user = {
            login,
            senha
        }


        axios.post("http://localhost:3001/login", user)
        .then((response) => {
            // pega a resposta do servidor e verifica se o login foi realizado com sucesso
            // se sim, seta o estado logado para true e redireciona para a página de listagem de alunos
            if(response.data){
                alert("Login realizado com sucesso")
                props.setLogado(true)
                navigate("/listarAluno")
                
            }else{
                alert("Login ou senha incorretos")
            }
        })
        .catch(error => console.log(error))
    }
        


    return (
        <Container maxWidth="xs">
            <Box
             sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 8
             }}

             component="form"
             onSubmit={handleSubmit}

            >
                <Typography component="h1" variant="h5">Sign In</Typography>
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        id = "login"
                        label="Login"
                        name = "login"
                        autoComplete="login"
                        autoFocus
                        
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                    />

                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        id = "senha"
                        label="Senha"
                        name = "senha"
                        autoComplete="password"

                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx = {{ 
                            mt: 3,
                            mb: 2

                            //my margin top and bottom
                        }}
                    >
                        Sign In
                    </Button>

                    <Box 
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%"
                        }}
                    >
                        <Link underline="none" href="#">Esqueceu a senha?</Link>
                        <Link underline="none" href="#">Cadastre-se!</Link>
                    </Box>
            </Box>
        </Container>
    )
}


export default Signin