import React, {useEffect, useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../../helpers/AuthContext";
import Swal from "sweetalert2";

const url = "http://localhost:3001/"

const CreateItem = () => {
  let history = useHistory();

  const initialValues = {
    item: "",
    type: "",
    price: "",
    description: "",
    image: "",
    score: "",
    discount: "",
    boughts: "",
    dish: "",
    isTopPlate: "",
  };

  const validationSchema = Yup.object().shape({
    item: Yup.string().required("Nombre obligatorio"),
    type: Yup.string().required("Tipo obligatorio"),
    price: Yup.string().required("Precio obligatorio"),
    description: Yup.string().required("Descripción obligatoria"),
    image: Yup.string().required("Imagen obligatoria"),
    score: Yup.string().required("Calificación obligatoria"),
    discount: Yup.string().required("Descuento Obligatorio"),
    boughts: Yup.string().required("Compras Obligatorias"),
    dish: Yup.string().required("Nombre Obligatorio"),
    isTopPlate: Yup.string().required("Información Obligatoria"),
  });

  const onSubmit = (data) => {
    
      axios.post(`${url}menu`, data ,{
        headers:{
          accessToken: localStorage.getItem("accessToken")
        }
      }).then((response) => {
        if(response.data.error){
          alert("Necistas estar logeado para crear un platillo");
          history.push('/login');
        } else {
          alert("se creo satisfactoriamente")
          history.push('/menu');
        }
        
      })
  };
 
  // empiezxa validacion para ver si estas logeado
  const {authState} = useContext(AuthContext);
  useEffect(() => {
    if(!authState.status){
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Necesitas estar loggeado como administrador para acceder a esta página'
      })
      history.push('/login');
    }else{
      console.log("si hay cuenta iniciada")
    }
  },[]);

  return (
    <>
      <div className="container">
        <h3 className="form__title__create">Agrega un Platillo al Menú</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <div className="form__wrapper">
            <Form>
              <div className="form__group">
                <label>Nombre de Platillo</label>
                <ErrorMessage name="item" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="item"
                  placeholder="Nombre de Item"
                />
              </div>
              <div className="form__group">
                <label>Tipo de Platilo</label>
                <ErrorMessage name="type" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="type"
                  placeholder="Nombre de Platillo"
                />
              </div>
              <div className="form__group">
                <label>Precio</label>
                <ErrorMessage name="price" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="price"
                  placeholder="Precio"
                />
              </div>
              <div className="form__group">
                <label>Descripción</label>
                <ErrorMessage name="description" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="description"
                  placeholder="Descripcion"
                />
              </div>
              <div className="form__group">
                <label>Foto</label>
                <ErrorMessage name="image" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="image"
                  placeholder="Imagen en URL"
                />
              </div>
              <div className="form__group">
                <label>Calificación</label>
                <ErrorMessage name="score" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="score"
                  placeholder="Calificacion"
                />
              </div>
              <div className="form__group">
                <label>Descuento</label>
                <ErrorMessage name="discount" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="discount"
                  placeholder="Descuento"
                />
              </div>
              <div className="form__group">
                <label>Compras Totales</label>
                <ErrorMessage name="boughts" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="boughts"
                  placeholder="Compras totales"
                />
              </div>
              <div className="form__group">
                <label>Platillo</label>
                <ErrorMessage name="dish" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="dish"
                  placeholder="Nombre de Platillo"
                />
              </div>
              <div className="form__group">
                <label>Es platillo Del Mes?</label>
                <ErrorMessage name="isTopPlate" component="span"/>
                <Field
                  id="inputCreatePost"
                  name="isTopPlate"
                  placeholder="Platillo del mes"
                />
              </div>

              <button type="submit" className="btn primary-btn">
                {" "}
                Crear Item
              </button>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
};

export default CreateItem;
