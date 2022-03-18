import {
    INICIAR_LOGIN,
    INICIAR_LOGIN_EXITO,
    INICIAR_LOGIN_ERROR
  } from "../types";
  
  // Cada reducer tiene su propio state
  
  const initialState = {
    usuario: null,
    error: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case INICIAR_LOGIN:
        return {
          ...state,
          usuario: null,
          error: null,
        };
      case INICIAR_LOGIN_EXITO:
        return {
          ...state,
          error: null,
          usuario: action.payload,
        };

      case INICIAR_LOGIN_ERROR:
        return {
          ...state,
          error: action.payload,
        };
  
        default:
        return state;
    }
  }