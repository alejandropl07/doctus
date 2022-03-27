import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Swal from    "sweetalert2";
import clienteAxios from "../config/axios";

//Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";
import { devolucion, devolucionError, devolucionExito } from "../actions/prestamosAction";

const Devoluciones = () => {
const   [codBar,  guardarCodBar]  =   useState('');
const   [ci,  guardarCi]  =   useState('');

const navigate  = useNavigate();

//Validacion
const dispatch  = useDispatch();
const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
const   exitoValidacion = ()    => dispatch(validacionExito()) ;
const   errorValidacion = ()    => dispatch(validacionError()) ;

const   iniciarDevolucion = ()    => dispatch(devolucion()) ;
const   errorDevolucion = ()    => dispatch(devolucionError()) ;
const   exitoDevolucion = ()    => dispatch(devolucionExito()) ;

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

    dispatch(iniciarDevolucion());

    //Eliminar en la API
    clienteAxios.delete(`api/prestamo/${codBar}`)
    .then(respuesta =>  {
        dispatch(exitoDevolucion())
        Swal.fire({
            title: "Devolución",
            text: `Devolución exitosa`,
            position: "center",
            background: "white",
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',            
        });
    })
    .catch(error  =>{
        dispatch(errorDevolucion(error))
        Swal.fire({
            title: "Error",
            text: `No se tiene registrado el préstamo de ese libro`,
            position: "center",
            background: "white",
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',            
        });
    })

    //Redireccionar
    //navigate('/');
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