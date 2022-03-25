import React from "react";
import platilloPrueba from "../../../pictures/platilloPrueba.jpg";
import { useHistory } from "react-router-dom";

const FirstGrid = (entryFiltered) => {
  let history = useHistory();
  return (
    <>
      <section id="dishGrid">
        <div className="container">
          {/* <h2 className="dishGrid__title">Platillos de Entrada</h2> */}
          <h2 className="dishGrid__title">Platillos General</h2>
          <div className="dishGrid__wrapper">
            {entryFiltered.entryFiltered.map((value, index) => {
              return (
                <div
                  className="dishGrid__item"
                  key={index}
                  onClick={() => {
                    history.push(`/dish/${value.id}`);
                  }}
                >
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
