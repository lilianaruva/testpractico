import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getProductTable } from "../../api/ProducTable/ProducTableModels";
//css
import "../../styles/table.css";

//style by materialUi
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `#A6A6A7`,
    color: "#01172C",
    fontFamily: "Montserrat",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    color: "#565657",
    fontFamily: "Montserrat",
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
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    //buildCells(dataTable);
  }, [dataTable]);

  useEffect(() => {
    getProductTable().then((data) => setDataTable(data));
  }, []);

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
            {dataTable.length > 0
              ? dataTable.map((data) => {
                  return (
                    <>
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          <div className="imageName">
                            <img src={data.productImage} />
                            {data.name}
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.sku}
                        </StyledTableCell>
                        <StyledTableCell
                          style={
                            data.persistence > 0
                              ? { color: "#23B794" }
                              : { color: "#D6215B" }
                          }
                          align="center"
                        >
                          {data.persistence * 100} %
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.averagePrice}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.averagePosition}
                        </StyledTableCell>
                      </StyledTableRow>
                    </>
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableAnalysis;
