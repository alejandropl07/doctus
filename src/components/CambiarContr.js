import React from "react";
import {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";
import {useForm}    from    "react-hook-form";

//Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";

const CambiarContr = () => {
  const { register, handleSubmit, errors } = useForm();

  const passwordOldRef =   useRef('');
  const passwordNewRef =   useRef('');
  const passwordNew2Ref =   useRef('');

  const navigate  = useNavigate();

  //Validacion
  const dispatch  = useDispatch();
  const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
  const   exitoValidacion = ()    => dispatch(validacionExito()) ;
  const   errorValidacion = ()    => dispatch(validacionError()) ;

  //Obtener los datos del state
  const error = useSelector((state) =>  state.error.error);
  const usuario =   useSelector((state) =>  state.usuario.usuario.username);

  const submitCambiarContr =  e   =>{
    e.preventDefault();

    validarFormulario();

    //Validar
    if(passwordOldRef.current.value.trim() === '' ||  passwordNewRef.current.value.trim() === ''  ||  passwordNew2Ref.current.value.trim() === ''){
        errorValidacion();
        return;
    }
    //Si pasa la validadacion
    exitoValidacion();

    if(passwordNewRef.current.value !== passwordNew2Ref.current.value){
        errorValidacion();
        return;
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    clienteAxios.put(`/api/users/${usuario}`, {password: passwordNewRef.current.value}, config);

    //Redireccionar
   // navigate('/principal');
}

  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold ">Cambiar contraseña</h2>
                <form onSubmit={submitCambiarContr}>
                    <div className="form-group">
                        <label>Contraseña actual</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Contraseña actual"
                            ref={passwordOldRef} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña nueva</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Contraseña nueva"
                            ref={passwordNewRef}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirmar contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Confirmar contraseña"
                            ref={passwordNew2Ref}
                        />
                    </div>
                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Actualizar</button>
                </form>

                {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Ha ocurrido un error</div>  :null}

            </div>
        </div>
    </div>
</div>

  );
};

export default CambiarContr;