import React from "react";
import AcercaDe from "./HomeComponents/AcercaDe";
import Discount from "./HomeComponents/Discount";
import Hero from "./HomeComponents/Hero";
import Info from "./HomeComponents/Info";
import MediaHome from "./HomeComponents/MediaHome";
import Newsletter from "./HomeComponents/Newsletter";
import PlatillosHome from "./HomeComponents/PlatillosHome";
import Recomendacion from "./HomeComponents/Recomendacion";
import Testimonios from "./HomeComponents/Testimonios";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Recomendacion />
      <PlatillosHome />
      <Discount />
      <MediaHome />
      <AcercaDe />
      <Testimonios />
      <Newsletter />
    </>
  );
};

export default Home;
