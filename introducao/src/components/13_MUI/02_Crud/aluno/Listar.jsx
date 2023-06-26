import { TableContainer, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"

import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"


import { styled } from "@mui/material/styles"
import { tableCellClasses } from "@mui/material/TableCell"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const Listar = () => {
    const [alunos, setAlunos] = useState([])


    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/listar")
            .then(
                (response) => {
                    setAlunos(response.data)
                }
            )
            .catch(error => console.log(error))
        }
        ,
        []
    )


    function deleteProfessorById(id){
         if(window.confirm("Deseja realmente excluir o aluno?")){
            axios.delete(`http://localhost:3001/alunos/remover/${id}`)
            .then(
                (response) => {
                    const resultado = alunos.filter(alu => alu._id != id)
                    setAlunos(resultado)
                }
            )
            .catch(error => console.log(error))
        }
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    return (
        <>
            <Typography variant="h5" fontWeight="bold">Listar Aluno</Typography>

            <TableContainer component={Paper} sx={{mt:4, mb:4}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                    {
                        alunos.map(
                            (aluno) => {
                                return (
                                    <StyledTableRow key={aluno._id}>
                                        <StyledTableCell>{aluno._id}</StyledTableCell>
                                        <StyledTableCell>{aluno.nome}</StyledTableCell>
                                        <StyledTableCell>{aluno.ira}</StyledTableCell>
                                        <StyledTableCell>
                                            <Box>
                                                <IconButton 
                                                    aria-label="edit" 
                                                    color="primary" 
                                                    component={Link} 
                                                    to={`/editarAluno/${aluno._id}`}
                                                    >
                                                    <EditIcon />
                                                </IconButton>

                                                <IconButton 
                                                    aria-label="delete" 
                                                    color="error"
                                                    onClick={() => deleteProfessorById(aluno._id)}
                                                    >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </StyledTableCell>
                                    </StyledTableRow> 
                                ) 
                            }
                        )
                    }       
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Listar