import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import platilloPrueba from "../../pictures/platilloPrueba.jpg";
import { AuthContext } from "../../helpers/AuthContext";

const Dish = () => {
  const [dish, setDish] = useState([]);

  const { authState } = useContext(AuthContext);

  const url = "http://localhost:3001/";
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${url}menu/byId/${id}`)
      .then((response) => {
        setDish(response.data);
      })
      .catch((error) => {
        console.log(error.respose);
      });
  }, []);

  return (
    <>
      <div className="product">
        <div className="product_wrapper">
          <div className="product-listing">
            <div className="product-img">
              <img src={platilloPrueba} alt="" />
            </div>
            <div className="content">
              <h1 className="name">{dish.item}</h1>
              <p className="info">{dish.description}</p>
              <p className="price">${dish.price}</p>
              <div className="btn-and-rating-box">
                {!authState.status ? (
                  <div className="btn_to_log_in">
                    <Link to="/login" className="btn_to_log_in_text">
                      
                      Inicia Sesión para Comprar
                    </Link>
                  </div>
                ) : (
                  <button className="btn_add_to_cart">
                    Agregar al carrito
                  </button>
                )}

                {authState.type === "Admin" && (
                  <button className="btn_add_to_cart">Borrar Platillo</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dish;
