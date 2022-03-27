import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { iniciarSancionExito } from "../actions/prestamosAction";
import { useDispatch, useSelector } from "react-redux";

const Sancionar = () => {
    const   [ci,  guardarCi]  =   useState('');

    const navigate  =   useNavigate();

    const   dispatch    =   useDispatch();
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;
    const   iniciarSancion = (sancion)    => dispatch(iniciarSancionExito(sancion)) ;

    const error =   useSelector((state) =>  state.error.error);


    const submitSancionar =  e   =>{
        e.preventDefault();
        validarFormulario();
        if(ci.trim() === '' ){
            errorValidacion();
            return;
        }
            exitoValidacion();

        
            iniciarSancion({
                ci
            });
       

        //Redireccionar
        navigate('/sancionar2');
    }

  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <form   onSubmit={submitSancionar}>
                    <div className="form-group">
                        <label>Código solicitante</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Código"
                            value={ci}
                            onChange={e=>guardarCi(e.target.value)} 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Sancionar</button>
                </form>
                {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Debe insertar un código</div>  :null}
                

            </div>
        </div>
    </div>
</div>

  );
};

export default Sancionar;