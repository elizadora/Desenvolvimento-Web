import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from "@mui/material";
import MyMenu from "./MyMenu";

//pages
import CadastrarProfessor from "./professor/Cadastrar";
import ListarProfessor from "./professor/Listar";
import EditarProfessor from "./professor/Editar";

import CadastrarAluno from "./aluno/Cadastrar";
import ListarAluno from "./aluno/Listar";
import EditarAluno from "./aluno/Editar";
import ListarAlunosAprovados from "./aluno/ListarAlunosAprovados";

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt: 5, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />} />
                    <Route path="listarProfessor" element={<ListarProfessor />} />
                    <Route path="editarProfessor/:id" element={<EditarProfessor />} />
                    
                    <Route path="cadastrarAluno" element={<CadastrarAluno />} />
                    <Route path="listarAluno" element={<ListarAluno />} />
                    <Route path="editarAluno/:id" element={<EditarAluno />} />
                    <Route path="listarAlunoAprovados" element={<ListarAlunosAprovados />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage