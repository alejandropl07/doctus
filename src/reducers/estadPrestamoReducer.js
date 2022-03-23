import {
    USO_BIBLIOTECA,
    USO_BIBLIOTECA_EXITO,
    USO_BIBLIOTECA_ERROR,
  } from "../types";
  
  // Cada reducer tiene su propio state
  
  const initialState = {
    prestPorUsuario: [],
    error: null,
    loading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case USO_BIBLIOTECA:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case USO_BIBLIOTECA_EXITO:
        return {
          ...state,
          error: false,
          prestPorUsuario: action.payload,
          loading: false,
        };

      case USO_BIBLIOTECA_ERROR:
        return {
          ...state,
          error: true,
          prestPorUsuario: [],
          loading: false,
        };
  
        default:
        return state;
    }
  }