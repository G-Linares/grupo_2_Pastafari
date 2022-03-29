import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import platilloPrueba from "../../pictures/platilloPrueba.jpg";
import { AuthContext } from "../../helpers/AuthContext";
import Swal from "sweetalert2";
import {FaEdit} from "react-icons/fa"

const Dish = () => {
  const [dish, setDish] = useState([]);

  const { authState } = useContext(AuthContext);

  const url = "http://localhost:3001/";

  let { id } = useParams();

  let history = useHistory();
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

  const deleteDish = (id) => {
    axios
      .delete(`${url}menu/${id}`)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Artículo Borrado",
          text: "Ya no aparacerá el artículo dentro del menú",
        });
        history.push("/menu");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // comienza seccion para editar un elemento del platillo con axios put

  const editImage = async () => {
    const { value: newImage } = await Swal.fire({
      title: 'Ingresa una nueva foto',
      input: 'text',
      inputLabel: 'image',
      inputPlaceholder: 'Ingresa la nueva foto aquí'
    });
    axios.put(`${url}menu/edit/image`,{newImage: newImage, id:id});
    setDish({...dish, image:newImage});
  }
  const editItem = async () => {
    const { value: newItem } = await Swal.fire({
      title: 'Ingresa un nuevo nombre del platillo',
      input: 'text',
      inputLabel: 'item',
      inputPlaceholder: 'Ingresa el nombre aquí'
    }) ;   
    axios.put(`${url}menu/edit/name`,{newItem: newItem, id:id});
    setDish({...dish, item:newItem});
  }
  const editDescriptionDish = async () => {
    const { value: newDescription } = await Swal.fire({
      title: 'Ingresa una nueva descripción',
      input: 'text',
      inputLabel: 'info',
      inputPlaceholder: 'Ingresa la descripción aquí'
    });
    axios.put(`${url}menu/edit/description`,{newDescription: newDescription, id:id});
    setDish({...dish, description:newDescription});
  }
  const editPrice = async () => {
    const { value: newPrice } = await Swal.fire({
      title: 'Ingresa un nuevo precio',
      input: 'text',
      inputLabel: 'price',
      inputPlaceholder: 'Ingresa el precio aquí'
    });
    axios.put(`${url}menu/edit/price`,{newPrice: newPrice, id:id});
    setDish({...dish,price:newPrice});
  }

  // termina seccion para editar una caracteristica del dish con axios

  return (
    <>
      <div className="product">
        <div className="product_wrapper">
          <div className="product-listing">
            <div className="product-img">
              <img src={platilloPrueba} alt="" />
              {authState.type === "Admin" && (
                <FaEdit onClick={() => editImage()} className="edit_item_icon"/>
              )}
            </div>
            <div className="content">
              <h1 className="name">{dish.item}{authState.type === "Admin" && (
                <FaEdit onClick={() => editItem()} className="edit_item_icon"/>
              )}</h1>
              
              <p className="info">{dish.description} {authState.type === "Admin" && (
                <FaEdit onClick={() => editDescriptionDish()} className="edit_item_icon"/>
              )}</p>
              
              <p className="price">${dish.price} {authState.type === "Admin" && (
                <FaEdit onClick={() => editPrice()} className="edit_item_icon"/>
              )}</p>
              
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
                  <button
                    className="btn_add_to_cart"
                    onClick={() => deleteDish(dish.id)}
                  >
                    Borrar Platillo
                  </button>
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
