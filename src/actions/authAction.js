import {
    INICIAR_LOGIN,
    INICIAR_LOGIN_EXITO,
    INICIAR_LOGIN_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";

  // Crear nuevo usuario. Función principal
export function signinAction(usuario) {
    return(dispatch)    =>  {
        dispatch(iniciarLogin());

        //Iniciar sesión
      //  clienteAxios.post('/api/auth/signin', usuario)
        clienteAxios.post('/api/auth/signin', usuario)
        .then(respuesta =>  {
            console.log(respuesta);
            console.log(respuesta.data.token);
            dispatch(iniciarLoginExito(usuario))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(iniciarLoginError(error))
        })
    }
}

export  const iniciarLogin =   ()  =>  ({
    type:   INICIAR_LOGIN
});

export  const iniciarLoginExito =   (usuario)  =>  ({
    type:   INICIAR_LOGIN_EXITO,
    payload:    usuario
});

export  const iniciarLoginError =   (error)  =>  ({
    type:   INICIAR_LOGIN_ERROR,
    payload:    error
});