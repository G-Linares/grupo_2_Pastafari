import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import platilloPrueba from "../../pictures/platilloPrueba.jpg";

const Dish = () => {
  const [dish, setDish] = useState([]);

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
                <button className="btn_add_to_cart">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dish;
