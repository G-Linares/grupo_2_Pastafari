import React from "react";
import { Link } from "react-router-dom";
import aglio from '../../../pictures/aglio.jpg';
import alfredo from '../../../pictures/alfredo.jpg';

const Recomendacion = () => {
  return (
    <>
      <section id="ourSpecials">
        <div className="container">
          <div className="ourSpecials__wrapper">
            <div className="ourSpecials__left">
              <div className="ourSpecials__item">
                <div className="ourSpecials__item__img">
                  <img src={aglio} alt="food img" />
                </div>
                <h2 className="ourSpecials__item__title">
                Spaghetti Aglio, Olio e Peperoncino
                </h2>
                <h3 className="ourSpecials__item__price">$119.99</h3>
        
                <p className="ourSpecials__item__text">
                Los spaghetti aglio, olio e peperoncino (espaguetis con ajo, aceite y guindilla) son un clásico de la gastronomía italiana, se dice que originales de la región de Abruzzo. Es una pasta bastante fácil de elaborar, además de ser muy económica.
                </p>
              </div>
              <div className="ourSpecials__item">
                <div className="ourSpecials__item__img">
                  <img src={alfredo} alt="food img" />
                </div>
                <h2 className="ourSpecials__item__title">
                  Pasta Fettuccine Alfredo
                </h2>
                <h3 className="ourSpecials__item__price">$99.99</h3>
            
                <p className="ourSpecials__item__text">
                Consiste en una pasta fresca de fettuccine con una salsa cremosa, hecha de mantequilla y queso parmesano.
                </p>
              </div>
            </div>
            <div className="ourSpecials__right">
              <h2 className="ourSpecials__title">Recomendiaciones del Chef</h2>
              <p className="ourSpecials__text">
                Estos platillos se encuentrán en una rotación mensual. Es decir
                que el chef selecciona dos platilolos para que puedas deleitar
                tu paladar de una forma nueva.
              </p>
              <Link to="/login" className="btn primary-btn">
                Inicia Sesión
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recomendacion;
