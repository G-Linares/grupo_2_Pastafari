import React from "react";
import Especiales from "./MenuComponents/Especiales";
import FirstGrid from "./MenuComponents/FirstGrid";
import SecondGrid from "./MenuComponents/SecondGrid";
import ThirdGrid from "./MenuComponents/ThirdGrid";
import TituloPagina from "./MenuComponents/TituloPagina";

const Menu = () => {
  return (
  
    <>
      <TituloPagina />
      <Especiales />
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
  
  
    </>
  )
};

export default Menu;
