import { combineReducers } from "redux";
import prestamosReducer from "./prestamosReducer";
import validacionReducer from "./validacionReducer";
import authReducer from "./authReducer";
import estadisticasReducer from "./estadisticasReducer";

export default  combineReducers ({
    error:  validacionReducer,
    prestamos:  prestamosReducer,
    usuario:    authReducer,
    estadisticas:   estadisticasReducer,
});