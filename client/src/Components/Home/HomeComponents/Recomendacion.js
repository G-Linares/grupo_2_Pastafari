import React from "react";
import { Link } from "react-router-dom";
import platilloPrueba from '../../../pictures/platilloPrueba.jpg';

const Recomendacion = () => {
  return (
    <>
      <section id="ourSpecials">
        <div className="container">
          <div className="ourSpecials__wrapper">
            <div className="ourSpecials__left">
              <div className="ourSpecials__item">
                <div className="ourSpecials__item__img">
                  <img src={platilloPrueba} alt="food img" />
                </div>
                <h2 className="ourSpecials__item__title">
                  Pasta Fettuccine Alfredo
                </h2>
                <h3 className="ourSpecials__item__price">$18</h3>
        
                <p className="ourSpecials__item__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="ourSpecials__item">
                <div className="ourSpecials__item__img">
                  <img src={platilloPrueba} alt="food img" />
                </div>
                <h2 className="ourSpecials__item__title">
                  Pasta Fettuccine Alfredo
                </h2>
                <h3 className="ourSpecials__item__price">$18</h3>
            
                <p className="ourSpecials__item__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                Book Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recomendacion;
