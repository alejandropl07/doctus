import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

//Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const   [user,  guardarUser]  =   useState('');
  const   [password,  guardarPassword]  =   useState('');

  const navigate  = useNavigate();

  //Validacion
  const dispatch  = useDispatch();
  const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
  const   exitoValidacion = ()    => dispatch(validacionExito()) ;
  const   errorValidacion = ()    => dispatch(validacionError()) ;

  //Obtener los datos del state
  const error = useSelector((state) =>  state.error.error);

  const submitLogin =  e   =>{
    e.preventDefault();

    validarFormulario();

    //Validar
    if(user.trim() === '' ||  password.trim() === ''){
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
                <h2 className="text-center mb-4 font-weight-bold ">Iniciar sesión</h2>
                <form onSubmit={submitLogin}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Usuario"
                            value={user} 
                            onChange={e=>guardarUser(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Contraseña"
                            value={password} 
                            onChange={e=>guardarPassword(e.target.value)}
                        />
                    </div>
                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Aceptar</button>
                </form>

                {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">El usuario o contraseña no existen</div>  :null}

            </div>
        </div>
    </div>
</div>

  );
};

export default Login;