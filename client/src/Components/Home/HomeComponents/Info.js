import React from "react";
import {FaPhoneAlt, FaClock, FaLocationArrow} from 'react-icons/fa';

const Info = () => {
  return (
    <>
      <section id="storeInfo">
        <div className="container">
          <div className="storeInfo__wrapper">
            <div className="storeInfo__item">
            <p className="storeInfo__text">Nuestro Horario</p>
              <div className="storeInfo__icon">
                <FaClock className="info_icon_fa"/>
              </div>
              <h3 className="storeInfo__title">10 AM - 7 PM</h3>
              
            </div>
            <div className="storeInfo__item">
            <p className="storeInfo__text">Ubicación</p>
              <div className="storeInfo__icon">
                <FaLocationArrow className="info_icon_fa"/>
              </div>
              <h3 className="storeInfo__title">CDMX, Mexico</h3>
              
            </div>
            <div className="storeInfo__item">
            <p className="storeInfo__text">Llámanos</p>
              <div className="storeInfo__icon">
                <FaPhoneAlt className="info_icon_fa"/>
              </div>
              <h3 className="storeInfo__title">+1234567891</h3>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
