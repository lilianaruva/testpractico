import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import imagePrueba from "../../imgs/Img.png";
//css
import '../../styles/table.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `#A6A6A7`,
    color: '#01172C',
    fontFamily: 'Montserrat',
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    color: '#565657',
    fontFamily: 'Montserrat',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableAnalysis = () => {
  return (
    <>
      <TableContainer className="table">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">SKU</StyledTableCell>
              <StyledTableCell align="center">% Presencia</StyledTableCell>
              <StyledTableCell align="center">Av.Price</StyledTableCell>
              <StyledTableCell align="center">Av. Position</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key="01">
              <StyledTableCell component="th" scope="row">
                <div className="imageName">
                  <img src={imagePrueba} />
                  name
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">calories</StyledTableCell>
              <StyledTableCell align="center">fat</StyledTableCell>
              <StyledTableCell align="center">carbs</StyledTableCell>
              <StyledTableCell align="center">protein</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableAnalysis;

/*
<TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>

*/
