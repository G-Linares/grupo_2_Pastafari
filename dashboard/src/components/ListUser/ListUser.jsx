import "./ListUser.scss";
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
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/users').then((resultado) => {
      setUserData(resultado.data);
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
            <TableCell className="tableCell heading">Apellido</TableCell>
            <TableCell className="tableCell heading">Username</TableCell>
            <TableCell className="tableCell heading">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row, key) => (
            <TableRow key={row.user_id}>
              <TableCell className="tableCell" >{row.user_id}</TableCell>
              <TableCell className="tableCell" >{row.name}</TableCell>
              <TableCell className="tableCell" >{row.last_name}</TableCell>
              <TableCell className="tableCell" >{row.user_name}</TableCell>
              <TableCell className="tableCell" >{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListUser;
