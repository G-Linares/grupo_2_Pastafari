import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";
import Login from "../Login/Login";
import NotFound from "../NotFound";
import CreateItem from "../Admin/CreateItem";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav__wrapper">
            <Link to="/" className="logo">
              <h1 className="main_logo_letters"> Pastafari </h1>
            </Link>
            <nav>
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </div>
              <div className="nav__bgOverlay"></div>
              <ul className="nav__list">
                <div className="nav__close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="nav__list__wrapper">
                  <li>
                    <Link className="nav__link" to="/">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to="/menu">
                      Menú
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to="/contact">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link className="btn primary-btn" to="/login">
                     Inicia Sesión
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/*aqui estan las rutas de la Navbar y ya renderiza todo */}
      <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/menu">
                <Menu />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/createItem">
                <CreateItem />
            </Route>
            <Route component={NotFound} />

      </Switch>
    </>
  );
};

export default Navbar;
