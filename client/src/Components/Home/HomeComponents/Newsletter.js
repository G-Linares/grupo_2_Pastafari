import React from 'react'

const Newsletter = () => {
  return (
    <>
        <section id="newsletter">
    <div className="container">
      <div className="newsletter__wrapper">
        <div className="newsletter__info">
          <h3 className="newsletter__title">Subscribete con Nosotros</h3>
          <p className="newsletter__text">
            De esta forma recibirás noticias, cupones y muchas otras promociones antes que nadie.
          </p>
        </div>
        <div className="newsletter__form">
          <form action="">
            <label >
              <input type="email" placeholder="Tu correo electrónico" />
            </label>
            <button type="submit">Unirte</button>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Newsletter