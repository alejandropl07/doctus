import {
    MAS_DEMANDADOS,
    MAS_DEMANDADOS_EXITO,
    MAS_DEMANDADOS_ERROR,
  } from "../types";
  
  // Cada reducer tiene su propio state
  
  const initialState = {
    docsMasDemand: [],
    error: null,
    loading: false,
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
  
        default:
        return state;
    }
  }