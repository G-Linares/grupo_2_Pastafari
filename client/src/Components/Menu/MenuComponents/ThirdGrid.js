import React from "react";
import platilloPrueba from '../../../pictures/platilloPrueba.jpg';

const ThirdGrid = () => {
  return (
    <>
      <section id="dishGrid">
        <div className="container">
          <h2 className="dishGrid__title">Lunch</h2>
          <div className="dishGrid__wrapper">
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Pasta Fettuccine Alfredo</h3>
                <h3 className="dishGrid__item__price">$12</h3>
                
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Pasta Fettuccine Alfredo</h3>
                <h3 className="dishGrid__item__price">$12</h3>
                
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Pasta Fettuccine Alfredo</h3>
                <h3 className="dishGrid__item__price">$12</h3>
               
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Pasta Fettuccine Alfredo</h3>
                <h3 className="dishGrid__item__price">$12</h3>
               
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src={platilloPrueba} alt="food img" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Pasta Fettuccine Alfredo</h3>
                <h3 className="dishGrid__item__price">$12</h3>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdGrid;
