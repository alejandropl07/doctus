import {
    USO_BIBLIOTECA,
    USO_BIBLIOTECA_EXITO,
    USO_BIBLIOTECA_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";

  // Obtener prestPorUsuario. Función principal
export function obtenerUsoBibliotecaAction() {
    return(dispatch)    =>  {
        dispatch(usoBiblioteca());

        //Obtener documentos mas demandados
        clienteAxios.get('/api/documentos/docMasDem/?anno=2017&mes=3')
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(usoBibliotecaExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(usoBibliotecaError())
        })
    }
}

export  const usoBiblioteca =   ()  =>  ({
    type:   USO_BIBLIOTECA
});

export  const usoBibliotecaExito =   (prestPorUsuario)  =>  ({
    type:   USO_BIBLIOTECA_EXITO,
    payload:    prestPorUsuario,
});

export  const usoBibliotecaError =   ()  =>  ({
    type:   USO_BIBLIOTECA_ERROR,
});