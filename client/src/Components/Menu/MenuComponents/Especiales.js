import React from "react";
import  platilloPrueba from '../../../pictures/platilloPrueba.jpg';
const Especiales = () => {
  return (
    <>
      <section id="ourSpecialsMenu">
        <div className="container">
          <h3 className="ourSpecialsMenu__title">Nuestros Especiales</h3>
          <div className="ourSpecialsMenu__wrapper">
            <div className="ourSpecialsMenu__item">
              <div className="ourSpecialsMenu__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="ourSpecialsMenu__item__info">
                <h3 className="ourSpecialsMenu__item__title">
                Pasta Fettuccine Alfredo
                </h3>
                <h4 className="ourSpecialsMenu__item__price">$12</h4>
                
              </div>
            </div>
            <div className="ourSpecialsMenu__item">
              <div className="ourSpecialsMenu__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="ourSpecialsMenu__item__info">
                <h3 className="ourSpecialsMenu__item__title">
                Pasta Fettuccine Alfredo
                </h3>
                <h4 className="ourSpecialsMenu__item__price">$12</h4>
                
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Especiales;
