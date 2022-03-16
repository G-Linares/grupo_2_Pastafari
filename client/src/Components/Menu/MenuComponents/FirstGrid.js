import React from "react";
import platilloPrueba from "../../../pictures/platilloPrueba.jpg";

const FirstGrid = (entryFiltered) => {
  return (
    <>
      <section id="dishGrid">
        <div className="container">
          <h2 className="dishGrid__title">Platillos de Entrada</h2>
          <div className="dishGrid__wrapper">
            {entryFiltered.entryFiltered.map((value, index) => {
              return (
                <div className="dishGrid__item" key={index}>
                  <div className="dishGrid__item__img">
                    <img src={platilloPrueba} alt="food img" />
                  </div>
                  <div className="dishGrid__item__info">
                    <h3 className="dishGrid__item__title">{value.item}</h3>
                    <h3 className="dishGrid__item__price">{value.price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstGrid;
