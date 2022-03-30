import React from "react";
import profilepic1 from "../../../pictures/profilepic1.jpg";
import profilepic2 from "../../../pictures/profilepic2.jpg";
import profilepic3 from "../../../pictures/profilepic3.jpg";
import profilepic4 from "../../../pictures/profilepic4.jpg";

const Testimonios = () => {
  return (
    <>
      <section id="testimonial">
        <div className="container">
          <div className="testimonial__wrapper">
            <h2 className="testimonial__title">Reseñas de clientes</h2>
            <div className="testimonial__items__wrapper">
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={profilepic1} alt="User 1" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Antonio Chavez</h3>

                  <p className="testimonial__item__text">
                    Muy buen restaurante italiano con una carta de vinos muy
                    completa, tienen un área de fumar en terraza y mesas en el
                    interior.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={profilepic2} alt="User 2" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Jimmy Hernández</h3>

                  <p className="testimonial__item__text">
                    Hacia mas de 5 años que no ibamos mi esposa y yo a este
                    restaurant. Que cambio desde la entrada! Buen servicio de
                    valet parking, buena recepcion, excelente mesero, limpieza,
                    areas abiertas con fuentes, RAPIDEZ en la elaboracion de los
                    platillos. Ricas ensaladas, mi esposa pidio ravioles con
                    salsa de queso y yo un espageti a la arriabata. Terminamos
                    con un tiramisu....nos hubiera gustado mas frio pero de muy
                    buen sabor.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={profilepic3} alt="User 3" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Alexa Olivares</h3>

                  <p className="testimonial__item__text">
                    Delicioso siempre! Hoy pedí la pasta "penne el italiano" y
                    de entrada unos hongos portobello que vienen con arúgula,
                    jitomate y una vinagreta exquisita. Mi mamá pidió un robalo,
                    una de las especialidades, con una salsa de espárragos
                    asados y espinaca, que también le gustó mucho. El mesero fue
                    bastante atento. Excelente lugar! Se los recomiendo
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={profilepic4} alt="User 4" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Adriana Sánchez</h3>

                  <p className="testimonial__item__text">
                    Es un restaurante de comida italiana muy bueno y reconocido
                    en Guadalajara. Amplitud de platillos y de vinos, muy buena
                    atención, precios razonables y sazón italiana en sus
                    platillos: pastas, pescados, carnes, vinos, todo de buena
                    calidad. Muy recomendable para ir en pareja, en familia o
                    con amigos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonios;
