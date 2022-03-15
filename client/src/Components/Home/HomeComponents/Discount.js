import React from "react";
import { Link } from 'react-router-dom';
import coupon from '../../../pictures/coupon.jpg'

const Discount = () => {
  return (
    <>
      <section id="discount">
        <div className="container">
          <div className="discount__wrapper">
            <div className="discount__images">
              <div className="discount__img1">
                <img src={coupon} alt="Food img" />
              </div>
              
            </div>
            <div className="discount__info">
              <h3 className="discount__text">20% de Descuento</h3>
              <h3 className="discount__title">Solo refiere a un amigo</h3>
              <h3 className="discount__price">
                <span className="discount__newPrice">Tú y tu amigo recibirán 20% de descuento si se registra con tu referencia.</span>
              </h3>
              <Link className="btn primary-btn" to="/login">
                Inicia Sesión
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
