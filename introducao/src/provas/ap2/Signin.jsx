import { Box, Typography, TextField, Container, Button, Link } from "@mui/material"
import { useState } from "react"
import axios from "axios"

const Signin = () => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")


    function handleSubmit(event){
        event.preventDefault()
        const user = {
            login,
            senha
        }


        axios.post("http://localhost:3001/login", user)
        .then((response) => {
            if(response.data.res){
                alert("Login realizado com sucesso")
                
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