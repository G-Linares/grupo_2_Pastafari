import React from "react";

const Form = () => {
  return (
    <>
      <section id="form">
        <div className="container">
          <h3 className="form__title">Quejas y Sugerencias</h3>
          <div className="form__wrapper">
            <form name="contact" method="POST">
              <div className="form__group">
                <label>Nombre</label>
                <input type="text" id="firstName" name="First Name" required />
              </div>
              <div className="form__group">
                <label >Apellidos</label>
                <input type="text" id="lastName" name="Last Name" required />
              </div>
              <div className="form__group">
                <label >Email</label>
                <input type="email" id="email" name="Email" required />
              </div>
              <div className="form__group">
                <label >Tema</label>
                <input type="text" id="subject" name="Subject" required />
              </div>
              <div className="form__group form__group__full">
                <label>Mensaje</label>
                <textarea
                  name="Message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn primary-btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
