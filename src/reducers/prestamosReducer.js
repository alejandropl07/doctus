import {
    AGREGAR_PRESTAMO,
    AGREGAR_PRESTAMO_EXITO,
    AGREGAR_PRESTAMO_ERROR,
  } from "../types";
  
  // Cada reducer tiene su propio state
  
  const initialState = {
    prestamos: [],
    error: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case AGREGAR_PRESTAMO:
        return {
          ...state,
          error: null,
        };
      case AGREGAR_PRESTAMO_EXITO:
        return {
          ...state,
          error: null,
          prestamos: [...state.prestamos, action.payload],
        };

      case AGREGAR_PRESTAMO_ERROR:
        return {
          ...state,
          error: action.payload,
        };
  
        default:
        return state;
    }
  }