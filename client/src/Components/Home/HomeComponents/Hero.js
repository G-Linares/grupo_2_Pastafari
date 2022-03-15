import React from "react";
import {Link} from 'react-router-dom';
import hero from '../../../pictures/hero.png';

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__left">
              <div className="hero__left__wrapper">
                <h1 className="hero__heading">Pasta autentica Italiana en la puerta de tu casa</h1>
                <p className="hero__info">
                  Pastafari es un restaurante especializado en pasta con el auténtico sabor Italiano. Contamos con más de 100 tipos de pasta al alcanze de un click.
                </p>
                <div className="button__wrapper">
                  <Link to="/menu" className="btn primary-btn">
                    Ver Menú
                  </Link>
                  <Link to="/login" className="btn">
                    Inicia Sesión
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero__right">
              <div className="hero__imgWrapper">
                <img src={hero} alt="Hero main pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
