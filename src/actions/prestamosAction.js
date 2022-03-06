import {
    AGREGAR_PRESTAMO,
    AGREGAR_PRESTAMO_EXITO,
    AGREGAR_PRESTAMO_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";

  // Crear nuevo prestamo. Función principal
export function crearNuevoPrestamoAction(prestamo) {
    return(dispatch)    =>  {
        dispatch(nuevoPrestamo());

        //Insertar en la API
    /*    clienteAxios.post('/prestamo', prestamo)
        .then(respuesta =>  {
            console.log(respuesta);*/
            dispatch(agregarPrestamoExito(prestamo))
       // })
       /* .catch(error    =>{
            console.log(error);*/
        //    dispatch(agregarPrestamoError(error))
      //  })
        
    }
}

export  const nuevoPrestamo =   ()  =>  ({
    type:   AGREGAR_PRESTAMO
});

export  const agregarPrestamoExito =   (prestamo)  =>  ({
    type:   AGREGAR_PRESTAMO_EXITO,
    payload:    prestamo
});

export  const agregarPrestamoError =   (error)  =>  ({
    type:   AGREGAR_PRESTAMO_ERROR,
    payload:    error
});