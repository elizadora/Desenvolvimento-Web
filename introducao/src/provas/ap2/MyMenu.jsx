import { useState } from "react";

import { AppBar, Container, Toolbar, Typography, Box, Button, Menu, MenuItem} from "@mui/material";
import AdbIncon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const MyMenu = () => {

    const [anchorProfessor, setAnchorProfessor] = useState(null);

    const [anchorAluno, setAnchorAluno] = useState(null);

    const handleOpenAnchorElProfessor = (event) => {
        setAnchorProfessor(event.currentTarget);
    }

    const handleCloseAnchorElProfessor = () => {
        setAnchorProfessor(null);
    }


    const handleOpenAnchorElAluno = (event) => {
        setAnchorAluno(event.currentTarget);
    }

    const handleCloseAnchorElAluno = () => {
        setAnchorAluno(null);
    }

    function dropProfMenu(){
        return(
            <Box>
                <Button
                    sx={{
                        color: "white",
                        my: 2
                    }}
                onClick={handleOpenAnchorElProfessor}

                >Professores</Button>

                <Menu 
                    anchorEl={anchorProfessor}
                    open={Boolean(anchorProfessor)}
                    onClose = {handleCloseAnchorElProfessor}

                    >
                    <MenuItem
                    onClick={handleCloseAnchorElProfessor}
                    
                    component={Link} to="/cadastrarProfessor"
                    >
                    Cadastrar
                    </MenuItem>
                    <MenuItem
                    onClick={handleCloseAnchorElProfessor}

                    component={Link} to="/listarProfessor"
                    
                    >Listar</MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIncon  sx={{display:{ xs: "none", md:"flex"}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"

                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >CRUD
                    </Typography>
                    <Box sx={{
                        ml: 3,
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                    
                    >
                        {dropProfMenu()}

                        <Button
                        sx={{
                            color: "white",
                            my: 2
                        }}

                        onClick={handleOpenAnchorElAluno}

                        >
                        Alunos</Button>
                        <Menu anchorEl={anchorAluno}
                        open={Boolean(anchorAluno)}
                        onClose={handleCloseAnchorElAluno}
                        >
                            <MenuItem
                            onClick={handleCloseAnchorElAluno}
                            component={Link} to="/cadastrarAluno"
                            >Cadastrar</MenuItem>

                            <MenuItem
                            onClick={handleCloseAnchorElAluno}
                            component={Link} to="/listarAluno"
                            >Listar</MenuItem>
                        </Menu>

                        <Button
                        sx={{
                            color: "white",
                            my: 2
                        }}
                        >
                        Sobre</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default MyMenu;