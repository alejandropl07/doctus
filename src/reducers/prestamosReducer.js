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
  
  // Cada reducer tiene su propio state
  
  const initialState = {
    prestamos: [],
    sancion:  {ci:''},
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


        case SANCION_USUARIO:
        return {
          ...state,
          error: null,
        };
      case SANCION_USUARIO_EXITO:
        return {
          ...state,
          error: null,
        };

      case SANCION_USUARIO_ERROR:
        return {
          ...state,
          error: action.payload,
        };


      case INICIAR_SANCION_EXITO:
        return {
          ...state,
          error: null,
          sancion:  action.payload,
        };
  

        case DEVOLUCION:
        return {
          ...state,
          error: null,
        };
      case DEVOLUCION_EXITO:
        return {
          ...state,
          error: null,
        };

      case DEVOLUCION_ERROR:
        return {
          ...state,
          error: action.payload,
        };

        default:
        return state;
    }
  }