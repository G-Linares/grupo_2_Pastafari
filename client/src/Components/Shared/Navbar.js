import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../helpers/AuthContext";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const { authState, setAuthState } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "",
      id: 0,
      status: false,
      type: "",
    });
    history.push("/");
  };

  const [activeMenu, setActiveMenu] = useState(false);
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <header className={`header ${show && "header__opacity"}`}>
        <div className="header__content">
          <div className="header__logo-container">
            <Link to="/" className="main_logo_letters">
              PASTAFARI
            </Link>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <Link to="/menu" className="nav_icon">
                  Menú
                </Link>
              </li>
              <li className="header__link-wrapper">
                <Link to="/contact" className="nav_icon">
                  Contacto
                </Link>
              </li>

              {authState.type === "Admin" && (
                <>
                  <li>
                    <Link to="/createItem" className="nav_icon">
                      Crea un Platillo
                    </Link>
                  </li>
                </>
              )}
              {!authState.status ? (
                <>
                  <li className="header__link-wrapper">
                    <Link className="btn primary-btn" to="/login">
                      Inicia Sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="header__link-wrapper">
                    <Link to="/cart" className="nav_icon">
                      <FaShoppingCart />
                    </Link>
                  </li>
                  <li className="header__link-wrapper">
                    <div className="dropdown">
                      <Link to="/myAccount" className="nav_icon">
                        <FaUserCircle />
                      </Link>
                      <div className="dropdown-content">
                        <p className="account_details">
                          Hola, {authState.username}!
                        </p>
                        <p className="account_details">
                          Cuenta de tipo <br />
                          {authState.type}
                        </p>
                        <button onClick={logout}> Log Out</button>
                        <Link to="/myAccount"> Settings</Link>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
            <div
              className="header__main-ham-menu-cont"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <FaBars />
            </div>
          </div>
        </div>
        {activeMenu && (
          <div className="header__sm-menu">
            <div className="header__sm-menu-content">
              <ul className="header__sm-menu-links">
                <li className="header__sm-menu-link">
                  <Link to="/menu" className="nav_icon" onClick={()=>{setActiveMenu(!activeMenu)}}>
                    Menú
                  </Link>
                </li>

                <li className="header__sm-menu-link">
                  <Link to="/contact" className="nav_icon" onClick={()=>{setActiveMenu(!activeMenu)}}>
                    Contacto
                  </Link>
                </li>
                {authState.type === "Admin" && (
                  <>
                    <li className="header__sm-menu-link">
                      <Link to="/createItem" className="nav_icon" onClick={()=>{setActiveMenu(!activeMenu)}}>
                        Crea un Platillo
                      </Link>
                    </li>
                  </>
                )}
                {!authState.status ? (
                <>
                  <li className="header__link-wrapper">
                    <Link className="btn primary-btn" to="/login"onClick={()=>{setActiveMenu(!activeMenu)}} >
                      Inicia Sesión
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="header__sm-menu-link">
                    <Link to="/cart" className="nav_icon" onClick={()=>{setActiveMenu(!activeMenu)}}>
                      Mi Carrito
                    </Link>
                  </li>
                  <li className="header__sm-menu-link">
                    
                      <Link to="/myAccount" className="nav_icon">
                        Mi cuenta
                      </Link>
      
            
                  
              
                  </li>
                </>
              )}

              
              </ul>
            </div>
          </div>
        )}
      </header>

      {/*aqui estan las rutas de la Navbar y ya renderiza todo */}
    </>
  );
};

export default Navbar;
