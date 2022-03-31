import "./ListMenu.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { useEffect, useState } from "react";

const ListUser = () => {
  const [dishData, setDishData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/dishes').then((resultado) => {
        setDishData(resultado.data);
     
    }).catch(err => {
      console.error(err)
    })
  }, []);
 

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell heading">ID</TableCell>
            <TableCell className="tableCell heading">Nombre</TableCell>
            <TableCell className="tableCell heading">Tipo</TableCell>
            <TableCell className="tableCell heading">Precio</TableCell>
            <TableCell className="tableCell heading">Descripción</TableCell>
            <TableCell className="tableCell heading">Calificación</TableCell>
            <TableCell className="tableCell heading">Descuento</TableCell>
            <TableCell className="tableCell heading">Compras</TableCell>
            <TableCell className="tableCell heading">Tipo de Pasta</TableCell>
            <TableCell className="tableCell heading">Platillo del Mes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dishData.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.item}</TableCell>
              <TableCell className="tableCell">{row.type}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.score}</TableCell>
              <TableCell className="tableCell">{row.discount}</TableCell>
              <TableCell className="tableCell">{row.boughts}</TableCell>
              <TableCell className="tableCell">{row.dish}</TableCell>
              <TableCell className="tableCell">{row.isTopPlate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListUser;
