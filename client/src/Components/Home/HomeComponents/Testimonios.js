import React from "react";
import user from "../../../pictures/user.jpg";

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
                  <img src={user} alt="User 1" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Gerardo Linares</h3>

                  <p className="testimonial__item__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                <img src={user} alt="User 2" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Mario</h3>

                  <p className="testimonial__item__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                <img src={user} alt="User 3" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Angel</h3>

                  <p className="testimonial__item__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                <img src={user} alt="User 4" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Mario</h3>

                  <p className="testimonial__item__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
