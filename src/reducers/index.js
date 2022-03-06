import { combineReducers } from "redux";
import prestamosReducer from "./prestamosReducer";
import validacionReducer from "./validacionReducer";

export default  combineReducers ({
    error:  validacionReducer,
    prestamos:  prestamosReducer,
});