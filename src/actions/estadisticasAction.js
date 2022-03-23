import {
    MAS_DEMANDADOS,
    MAS_DEMANDADOS_EXITO,
    MAS_DEMANDADOS_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";

  // Obtener docsMasDemand. Función principal
export function obtenerMasDemandadosAction() {
    return(dispatch)    =>  {
        dispatch(masDemandados());

        //Obtener documentos mas demandados
        clienteAxios.get('/api/documentos/docMasDem/?anno=2017&mes=3')
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(masDemandadosExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(masDemandadosError())
        })
    }
}

export  const masDemandados =   ()  =>  ({
    type:   MAS_DEMANDADOS
});

export  const masDemandadosExito =   (docsMasDemand)  =>  ({
    type:   MAS_DEMANDADOS_EXITO,
    payload:    docsMasDemand,
});

export  const masDemandadosError =   ()  =>  ({
    type:   MAS_DEMANDADOS_ERROR,
});