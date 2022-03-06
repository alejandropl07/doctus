import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

//Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";

const Devoluciones = () => {
const   [codBar,  guardarCodBar]  =   useState('');
const   [ci,  guardarCi]  =   useState('');

const navigate  = useNavigate();

//Validacion
const dispatch  = useDispatch();
const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
const   exitoValidacion = ()    => dispatch(validacionExito()) ;
const   errorValidacion = ()    => dispatch(validacionError()) ;

//Obtener los datos del state
const error = useSelector((state) =>  state.error.error);

const submitDevoluciones =  e   =>{
e.preventDefault();

validarFormulario();

//Validar
if(ci.trim() === '' ||  codBar.trim() === ''){
    errorValidacion();
    return;
}

//Si pasa la validadacion
exitoValidacion();

//Hacer devolucion
// agregarProducto({
//     nombre,
//    precio
// });

//Redireccionar
navigate('/');
}

  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold ">Devoluciones</h2>
                <form   onSubmit={submitDevoluciones}>
                <div className="form-group">
                        <label>Código documento</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Documento"
                            value={codBar} 
                            onChange={e=>guardarCodBar(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Código solicitante</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Solicitante"
                            value={ci} 
                            onChange={e=>guardarCi(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Aceptar</button>
                </form>

                {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div>  :null}

            </div>
        </div>
    </div>
</div>
  );
};

export default Devoluciones;