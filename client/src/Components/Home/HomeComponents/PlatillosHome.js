import React from "react";
import carbonara from '../../../pictures/carbonara.jpg';
import putanesca from '../../../pictures/putanesca.jpg';
import norma from '../../../pictures/norma.jpg';
import fetuccini from '../../../pictures/fetuccini.jpg';
import pesto from '../../../pictures/pesto.jpeg';

const PlatillosHome = () => {
  return (
    <>
      <section id="dishGrid">
        <div className="container">
          <h2 className="dishGrid__title">Favoritos del Mes</h2>
          <div className="dishGrid__wrapper">
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={carbonara} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Spaghetti alla Carbonara</h3>
                <h3 className="dishGrid__item__price">$78.00</h3>
              
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={putanesca} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Spaghetti alla Puttanesca</h3>
                <h3 className="dishGrid__item__price">$100.00</h3>
              
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={norma} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Fusilli alla Norma</h3>
                <h3 className="dishGrid__item__price">$120.00</h3>
               
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={pesto} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Trenette al Pesto </h3>
                <h3 className="dishGrid__item__price">$99.00</h3>
               
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={fetuccini} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Fetuccini a la putanesca </h3>
                <h3 className="dishGrid__item__price">$150.00</h3>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlatillosHome;
