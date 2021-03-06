import { combineReducers } from "redux";
import prestamosReducer from "./prestamosReducer";
import validacionReducer from "./validacionReducer";
import authReducer from "./authReducer";
import estadisticasReducer from "./estadisticasReducer";
import estadPrestamoReducer from "./estadPrestamoReducer";

export default  combineReducers ({
    error:  validacionReducer,
    prestamos:  prestamosReducer,
    usuario:    authReducer,
    estadisticas:   estadisticasReducer,
    estadPrestamo:  estadPrestamoReducer,
});