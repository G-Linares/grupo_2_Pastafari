import React from "react";
import { useHistory} from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const MyAccount = () => {
  // quiero mandar alarta cuando un usuario quiera entrar a la pagina de myaccount cuando no este logeado
  let history = useHistory();
  const { authState } = useContext(AuthContext);
  //ocupare un fetch para obtener el id de usuario y mostrar sus datos
  const [user, setUser] = useState([]);
 
  //jalo la iformacion del usuariuo que esta logeado con context

  useEffect(() => {
    if (!authState.status) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Necesitas estar loggeado para acceder a una cuenta",
      });
      history.push("/login");
    } else {
      Swal.fire({
        icon: "success",
        title: "Usuario Autenticado",
        text: "Aquí puedes modificar tu cuenta",
      });
    }
    axios
      .get(`http://localhost:3001/users/profile/${authState.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error.respose);
      });
   
  }, []);

  return (
    <>
       <div className="container">"
        <h3 className="form__title__create">Modifica tu cuenta "{user.name}"</h3>
          <div className="form__wrapper">
            <form>
              <div className="form__group">
                <label>Nombre de Usuario</label>
                <input
                  id="inputCreatePost"
                  name="username"
                  placeholder={user.username}
                />
              </div>
              <div className="form__group">
                <label>Tu Nombre</label>
                <input
                  id="inputCreatePost"
                  name="name"
                  placeholder={user.name}
                />
              </div>
              <div className="form__group">
                <label>Tu Apellido</label>
                <input
                  id="inputCreatePost"
                  name="last_name"
                  placeholder={user.last_name}
                />
              </div>
              <div className="form__group">
                <label>Tu Email</label>
                <input
                  id="inputCreatePost"
                  name="descriemailption"
                  placeholder={user.email}
                />
              </div>
              <div className="form__group">
                <label>Nueva Contraseña</label>
                <input
                  id="inputCreatePost"
                  name="password"
                  placeholder="Nueva password"
                />
              </div>
              <div className="form__group">
                <label>Tu Foto</label>
                <input
                  id="inputCreatePost"
                  name="image"
                  placeholder={user.img}
                />
              </div>

              <button type="submit" className="btn primary-btn">
                Guardar Cambios
              </button>
            </form>
          </div>
      </div>
    </>
  );
};

export default MyAccount;
