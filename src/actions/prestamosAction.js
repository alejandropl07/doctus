import {
    AGREGAR_PRESTAMO,
    AGREGAR_PRESTAMO_EXITO,
    AGREGAR_PRESTAMO_ERROR,
    SANCION_USUARIO,
    SANCION_USUARIO_EXITO,
    SANCION_USUARIO_ERROR,
    INICIAR_SANCION_EXITO,
    DEVOLUCION,
    DEVOLUCION_EXITO,
    DEVOLUCION_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";
  import Swal from "sweetalert2";

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



// Crear nuevo SANCION. Función principal
export function crearNuevaSancionAction(sancion) {
    return(dispatch)    =>  {
        dispatch(nuevaSancion());

        //Insertar en la API
        clienteAxios.post('api/sancionados', sancion)
        .then(respuesta =>  {
            console.log(respuesta);
            dispatch(agregarSancionExito(sancion))
            Swal.fire({
                title: "Sancionar usuario",
                text: `El usuario ha sido sancionado`,
                position: "center",
                background: "white",
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar',            
              });
        })
        .catch(error    =>{
            dispatch(agregarSancionError(error))
            Swal.fire({
                title: "Error",
                text: `El usuario ya se encuentra sancionado`,
                position: "center",
                background: "white",
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar',            
              });
        })
        
    }
}

export  const nuevaSancion =   ()  =>  ({
    type:   SANCION_USUARIO
});

export  const agregarSancionExito =   ()  =>  ({
    type:   SANCION_USUARIO_EXITO,
});

export  const agregarSancionError =   (error)  =>  ({
    type:   SANCION_USUARIO_ERROR,
    payload:    error
});




/*export function devolucionAction() {
    return(dispatch)    =>  {
        dispatch(devolucion());

        //Eliminar en la API
        clienteAxios.delete(`api/prestamo/${codBarras}`, devolucion)
        .then(respuesta =>  {
            console.log(respuesta);
            dispatch(devolucionExito(devolucion))
            Swal.fire({
                title: "Devolución",
                text: `Devolución exitosa`,
                position: "center",
                background: "white",
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar',            
              });
        })
        .catch(error    =>{
            dispatch(devolucionError(error))
            Swal.fire({
                title: "Error",
                text: `No se tiene registrado el préstamo de ese libro`,
                position: "center",
                background: "white",
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar',            
              });
        })
        
    }
}*/

export  const devolucion =   ()  =>  ({
    type:   DEVOLUCION
});

export  const devolucionExito =   ()  =>  ({
    type:   DEVOLUCION_EXITO,
});

export  const devolucionError =   (error)  =>  ({
    type:   DEVOLUCION_ERROR,
    payload:    error
});




export  const iniciarSancionExito =   (sancion)  =>  ({
    type:   INICIAR_SANCION_EXITO,
    payload:    sancion
});
