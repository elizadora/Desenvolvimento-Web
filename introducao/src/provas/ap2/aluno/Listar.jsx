import { TableContainer, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell, Box, TableFooter } from "@mui/material"
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
    let media = 0.0

    // calcula a média dos IRAs
    for(let i = 0; i < alunos.length; i++){
        media += alunos[i].ira
    }

    media = media / alunos.length

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
          backgroundColor: theme.palette.action.hover
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
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">NOME</StyledTableCell>
                            <StyledTableCell align="center">CURSO</StyledTableCell>
                            <StyledTableCell align="center">IRA</StyledTableCell>
                            <StyledTableCell align="center">AÇÔES</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.length > 0 ? (
                               (
                                    alunos.map(
                                        (aluno) => {
                                            // verifica se o aluno está aprovado ou não
                                            let aprovado = false
                                            if(aluno.ira >= media){
                                                aprovado = true
                                            }
                                            return (
                                                <StyledTableRow 
                                                key={aluno._id}>
                                                    <StyledTableCell align="center">{aluno._id}</StyledTableCell>
                                                    {/* se o aluno estiver aprovado, a cor do nome será preta, caso contrário, será vermelha */} 
                                                    <StyledTableCell align="center" sx={{color: aprovado ? "black" : "red"}}>{aluno.nome}</StyledTableCell>
                                                    <StyledTableCell align="center">{aluno.curso}</StyledTableCell>
                                                    <StyledTableCell align="center">{aluno.ira}</StyledTableCell>
                                                    <StyledTableCell align="center">
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
                               )
                            )
                            :
                            (
                                <StyledTableRow>
                                    <StyledTableCell colSpan={5} align="center">Nenhum aluno cadastrado</StyledTableCell>
                                </StyledTableRow>
                            )

                        }   
                    </TableBody>
                    <TableFooter>
                        <StyledTableRow>
                        
                            <StyledTableCell colSpan={3} align="center">Média Geral</StyledTableCell>
                            {/* calcula a média dos IRAs */}
                            <StyledTableCell align="center">{alunos.length > 0 ? media.toFixed(2) : 0}</StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                        </StyledTableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

export default Listar