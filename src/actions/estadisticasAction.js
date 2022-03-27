import {
    MAS_DEMANDADOS,
    MAS_DEMANDADOS_EXITO,
    MAS_DEMANDADOS_ERROR,
    UTIL_DOCUMENTOS,
    UTIL_DOCUMENTOS_EXITO,
    UTIL_DOCUMENTOS_ERROR,
    NUM_DOCUMENTOS,
    NUM_DOCUMENTOS_EXITO,
    NUM_DOCUMENTOS_ERROR,
    SIN_FOLIADO,
    SIN_FOLIADO_EXITO,
    SIN_FOLIADO_ERROR,
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




// Obtener utilizacion de documentos. Función principal
export function obtenerUtilizacionDocumentosAction() {
    return(dispatch)    =>  {
        dispatch(utilDocumentos());

        clienteAxios.get('/api/documentos/docMasDem/?anno=2017&mes=3')
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(utilDocumentosExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(utilDocumentosError())
        })
    }
}

export  const utilDocumentos =   ()  =>  ({
    type:   UTIL_DOCUMENTOS
});

export  const utilDocumentosExito =   (utilizDocs)  =>  ({
    type:   UTIL_DOCUMENTOS_EXITO,
    payload:    utilizDocs,
});

export  const utilDocumentosError =   ()  =>  ({
    type:   UTIL_DOCUMENTOS_ERROR,
});



// Obtener numero de documentos. Función principal
export function obtenerNumeroDocumentosAction() {
    return(dispatch)    =>  {
        dispatch(numDocumentos());

        clienteAxios.get('/api/documentos/numeroDeDocs')
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(numDocumentosExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(numDocumentosError())
        })
    }
}

export  const numDocumentos =   ()  =>  ({
    type:   NUM_DOCUMENTOS
});

export  const numDocumentosExito =   (numDocs)  =>  ({
    type:   NUM_DOCUMENTOS_EXITO,
    payload:    numDocs,
});

export  const numDocumentosError =   ()  =>  ({
    type:   NUM_DOCUMENTOS_ERROR,
});



// Obtener numero de documentos. Función principal
export function obtenerSinFoliadoAction() {
    return(dispatch)    =>  {
        dispatch(sinFoliado());

        clienteAxios.get('/api/documentos/docsSinFol')
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(sinFoliadoExito(respuesta.data))
        })
        .catch(error    =>{
            dispatch(sinFoliadoError())
        })
    }
}

export  const sinFoliado =   ()  =>  ({
    type:   SIN_FOLIADO
});

export  const sinFoliadoExito =   (sinFoliado)  =>  ({
    type:   SIN_FOLIADO_EXITO,
    payload:    sinFoliado,
});

export  const sinFoliadoError =   ()  =>  ({
    type:   SIN_FOLIADO_ERROR,
});