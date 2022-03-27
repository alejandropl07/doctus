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
  
  // Cada reducer tiene su propio state
  
  const initialState = {
    docsMasDemand: [],
    error: null,
    loading: false,
    utilizDocs: [],
    numDocs: [],
    sinFoliado: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case MAS_DEMANDADOS:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case MAS_DEMANDADOS_EXITO:
        return {
          ...state,
          error: false,
          docsMasDemand: action.payload,
          loading: false,
        };

      case MAS_DEMANDADOS_ERROR:
        return {
          ...state,
          error: true,
          docsMasDemand: [],
          loading: false,
        };

        case UTIL_DOCUMENTOS:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case UTIL_DOCUMENTOS_EXITO:
        return {
          ...state,
          error: false,
          utilizDocs: action.payload,
          loading: false,
        };

      case UTIL_DOCUMENTOS_ERROR:
        return {
          ...state,
          error: true,
          utilizDocs: [],
          loading: false,
        };


        case NUM_DOCUMENTOS:
          return {
            ...state,
            error: null,
            loading: true,
          };
        case NUM_DOCUMENTOS_EXITO:
          return {
            ...state,
            error: false,
            numDocs: action.payload,
            loading: false,
          };
  
        case NUM_DOCUMENTOS_ERROR:
          return {
            ...state,
            error: true,
            numDocs: [],
            loading: false,
          };



          case SIN_FOLIADO:
            return {
              ...state,
              error: null,
              loading: true,
            };
          case SIN_FOLIADO_EXITO:
            return {
              ...state,
              error: false,
              sinFoliado: action.payload,
              loading: false,
            };
    
          case SIN_FOLIADO_ERROR:
            return {
              ...state,
              error: true,
              sinFoliado: [],
              loading: false,
            };
  
        default:
        return state;
    }
  }