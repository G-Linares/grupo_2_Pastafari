import React, { useEffect, useState } from "react";
import Especiales from "./MenuComponents/Especiales";
import FirstGrid from "./MenuComponents/FirstGrid";
import SecondGrid from "./MenuComponents/SecondGrid";
import ThirdGrid from "./MenuComponents/ThirdGrid";
import TituloPagina from "./MenuComponents/TituloPagina";
import axios from "axios";

const Menu = () => {

  //hago el fetch a todos los platillos 
  const [listOfDishes, setListOfDishes] = useState([]);
  const url = "http://localhost:3001/";

  useEffect(() => {
    const getDishes = async () => {
      const dish = await axios.get(`${url}menu`);
      setListOfDishes(dish.data);
    };
    getDishes();
    
  }, []);

  // filtrado para seccionar
  const entryFiltered = listOfDishes.filter(dish => dish.type.includes('entry'));
  const breakfastFiltered = listOfDishes.filter(dish => dish.type.includes('desayuno'));
  const mainFiltered = listOfDishes.filter(dish => dish.type.includes('Comida'));

  return (
    <>
      <TituloPagina />
      <Especiales />
      <FirstGrid entryFiltered={entryFiltered} />
      <SecondGrid breakfastFiltered={breakfastFiltered}/>
      <ThirdGrid mainFiltered={mainFiltered} />
    </>
  );
};

export default Menu;
