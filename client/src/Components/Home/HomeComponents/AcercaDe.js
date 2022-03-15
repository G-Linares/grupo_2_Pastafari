import React from "react";
import {FaClipboardCheck, FaMoneyCheckAlt, FaRunning, FaCookieBite } from "react-icons/fa";

const AcercaDe = () => {
  return (
    <>
      <section id="whyUs">
        <div className="container">
          <div className="whyUs__wrapper">
            <div className="whyUs__left">
              <h2 className="whyUs__title">Por que escoger Pastafari</h2>
              <p className="whyUs__text">
                Actualmente somos el único restaurante autanticamente Italiano que se enfoca en brindar la mayor experiencia gastronómica europea. Tenemos 10 años de experiencia brindando platillos a la puerta de tu casa. De igual forma nos aseguramos que tu comida llegue caliente y lista para comer.
              </p>
            </div>
            <div className="whyUs__right" >
              <div className="whyUs__items__wrapper">
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <FaClipboardCheck/>
                  </div>
                  <p className="whyUs__item__text">Calidad</p>
                </div>
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <FaMoneyCheckAlt />
                  </div>
                  <p className="whyUs__item__text">Precio</p>
                </div>
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <FaRunning />
                  </div>
                  <p className="whyUs__item__text">Rapidéz</p>
                </div>
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <FaCookieBite />
                  </div>
                  <p className="whyUs__item__text">Originialidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcercaDe;
