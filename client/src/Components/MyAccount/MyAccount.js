import React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

import profilepic1 from "../../pictures/profilepic1.jpg";

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

  const editUsername = async () => {
    const { value: newUsername } = await Swal.fire({
      title: 'Ingresa una nuevo nombre de usuario',
      input: 'text',
      inputLabel: 'username',
      inputPlaceholder: 'Ingresa el nuevo username aqui',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas escribir algo!'
        }
      }
    });
    axios.put(`http://localhost:3001/users/edit/username`,{newUsername: newUsername, id:authState.id});
    setUser({...user, username: newUsername})
  };
  const editName = async () => {
    const { value: newName } = await Swal.fire({
      title: 'Ingresa una nuevo nombre',
      input: 'text',
      inputLabel: 'name',
      inputPlaceholder: 'Ingresa el nuevo username aqui',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas escribir algo!'
        }
      }
    });
    axios.put(`http://localhost:3001/users/edit/name`,{newName: newName, id:authState.id});
    setUser({...user, name: newName})
  };
  const editLastName = async () => {
    const { value: newLastName } = await Swal.fire({
      title: 'Ingresa una nuevo apellido',
      input: 'text',
      inputLabel: 'lastName',
      inputPlaceholder: 'Ingresa el nuevo username aqui',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas escribir algo!'
        }
      }
    });
    axios.put(`http://localhost:3001/users/edit/last_name`,{newLastName: newLastName, id:authState.id});
    setUser({...user, last_name: newLastName})
  };
  const editEmail= async () => {
    const { value: newEmail } = await Swal.fire({
      title: 'Ingresa una nuevo correo electrónico',
      input: 'text',
      inputLabel: 'email',
      inputPlaceholder: 'Ingresa el nuevo username aqui',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas escribir algo!'
        }
      }
    });
    axios.put(`http://localhost:3001/users/edit/email`,{newEmail: newEmail, id:authState.id});
    setUser({...user, email: newEmail})
  };
  const editType= async () => {
    const { value: newType } = await Swal.fire({
      title: 'Ingresa una nuevo correo electrónico',
      input: 'text',
      inputLabel: 'type',
      inputPlaceholder: 'Ingresa tipo de cuenta',
      showCancelButton: true,
      inputValidator: (value) => {
        if (value !== "Admin" && value !== "Cliente") {
          return 'Escribe Cliente o Admin'
        }
      }
    });
    axios.put(`http://localhost:3001/users/edit/type`,{newType: newType, id:authState.id});
    setUser({...user, type: newType})
  };

  return (
    <>
      <div className="container">
        <h3 className="form__title__create">
          Modifica tu cuenta "{user.name}"
        </h3>
        <div className="profile_picture_wrapper">
          <div className="profile_picture">
            <img src={profilepic1} width="120px" height="120px" />
          </div>
          <div className="edit_button_propfile_picture">
            <FaEdit ></FaEdit>
          </div>
        </div>
        <div className="form__wrapper">
          <div className="account_information_container">
            <h2 className="inputCreatePost">
              Nombre de usuario: {user.username}
              
            </h2>
            <FaEdit className="icon_edit_profile_main" onClick={() => {editUsername()}} />
          </div>
          <div className="account_information_container">
            <h2 className="inputCreatePost">
              Nombre: {user.name}
            </h2>
            <FaEdit className="icon_edit_profile_main" onClick={() => {editName()}}/>
          </div>
          <div className="account_information_container">
            <h2 className="inputCreatePost">
              Apellido: {user.last_name}
            </h2>
            <FaEdit className="icon_edit_profile_main" onClick={() => {editLastName()}}/>
          </div>
          <div className="account_information_container">
            <h2 className="inputCreatePost">
              email: {user.email}
            </h2>
            <FaEdit className="icon_edit_profile_main" onClick={() => {editEmail()}}/>
          </div>
          <div className="account_information_container">
            <h2 className="inputCreatePost">
              Contraseña
            </h2>
            <FaEdit className="icon_edit_profile_main" />
          </div>
          <div className="account_information_container">
            <h2 className="inputCreatePost">
              Tipo de cuenta: {user.type}
            </h2>
            <FaEdit className="icon_edit_profile_main" onClick={() => {editType()}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
