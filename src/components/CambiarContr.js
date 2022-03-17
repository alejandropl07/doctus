import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

//Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";

const CambiarContr = () => {
  const   [passwordOld,  guardarPasswordOld]  =   useState('');
  const   [passwordNew,  guardarPasswordNew]  =   useState('');
  const   [passwordNew2,  guardarPasswordNew2]  =   useState('');

  const navigate  = useNavigate();

  //Validacion
  const dispatch  = useDispatch();
  const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
  const   exitoValidacion = ()    => dispatch(validacionExito()) ;
  const   errorValidacion = ()    => dispatch(validacionError()) ;

  //Obtener los datos del state
  const error = useSelector((state) =>  state.error.error);

  const submitCambiarContr =  e   =>{
    e.preventDefault();

    validarFormulario();

    //Validar
    if(passwordOld.trim() === '' ||  passwordNew.trim() === ''  ||  passwordNew2.trim() === ''){
        errorValidacion();
        return;
    }

    
    //Si pasa la validadacion
    exitoValidacion();

    //Crear el nuevo producto
   // agregarProducto({
   //     nombre,
    //    precio
   // });

    //Redireccionar
    navigate('/principal');
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
                            type="text" 
                            className="form-control" 
                            placeholder="Contraseña actual"
                            value={passwordOld} 
                            onChange={e=>guardarPasswordOld(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña nueva</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Contraseña nueva"
                            value={passwordNew} 
                            onChange={e=>guardarPasswordNew(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirmar contraseña</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Confirmar contraseña"
                            value={passwordNew2} 
                            onChange={e=>guardarPasswordNew2(e.target.value)}
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