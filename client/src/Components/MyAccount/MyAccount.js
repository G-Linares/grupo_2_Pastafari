import React from 'react'
import { useHistory } from 'react-router-dom';
import {AuthContext} from "../../helpers/AuthContext"
import Swal from 'sweetalert2';
import { useContext, useEffect } from 'react';

const MyAccount = () => {

  // quiero mandar alarta cuando un usuario quiera entrar a la pagina de myaccount cuando no este logeado

  let history = useHistory();
  const {authState} = useContext(AuthContext);

  useEffect(() => {
    console.log(authState.status)
    if(!authState.status){
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Necesitas estar loggeado para acceder a una cuenta'
      })
      history.push('/login');
    } else {
      console.log('accediste')
    } 
  }, []);

  return (
    <>
        MyAccount
    </>
  )
}

export default MyAccount