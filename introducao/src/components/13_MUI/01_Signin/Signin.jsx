import { Box, Typography, TextField, Container, Button, Link } from "@mui/material"

const Signin = () => {
    return (
        <Container maxWidth="xs">
            <Box
             sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 8
             }} 
            >
                <Typography component="h1" variant="h5">Sign In</Typography>
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        id = "email"
                        label="Endereço de e-mail"
                        name = "email"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        id = "password"
                        label="Senha"
                        name = "password"
                        autoComplete="password"
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