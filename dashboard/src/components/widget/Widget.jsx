import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useState, useEffect} from 'react';
import axios from 'axios';


const Widget = ({ type }) => {

  const[totalUsers, setTotalUsers] = useState([]);
  const[totalBoughts, setTotalBoughts] = useState([]);
  const[totalDishes, setTotalDishes] = useState([]);

  useEffect(() => {
    axios('http://localhost:3002/api/users').then((resultado) => {
      setTotalUsers(resultado.data);
    })
    axios('http://localhost:3002/api/dishes').then((resultado) => {
      setTotalDishes(resultado.data);
    })
  },[]);

  const totalUserNumber = totalUsers.length;
  const totalDishesNumber = totalDishes.length;
  const totalDishesBoughts = totalDishes.map(item => item.boughts).reduce((prev, curr) => prev + curr, 0);
  

  let data;

  switch (type) {
    case "Usuarios":
      data = {
        total: totalUserNumber,
        title: "Usuarios",
        isMoney: false,
        link: "Ver todos los usuarios",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Compras":
      data = {
        total: totalDishesBoughts,
        title: "Compras",
        isMoney: false,
        link: "Ver todas las compras",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Platillos":
      data = {
        total: totalDishesNumber,
        title: "Platillos",
        isMoney: false,
        link: "Ver todos los platillos",
        icon: (
          <FastfoodIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.total}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
