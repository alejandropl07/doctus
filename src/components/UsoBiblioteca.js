import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../config/axios";
import { usoBibliotecaError, usoBibliotecaExito } from "../actions/prestPorUsuarioAction";

const UsoBiblioteca = () => {
    const   [anno,  guardarAnno]  =   useState('');
    const   [usuario,  guardarUsuario]  =   useState('');

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.error.error);


    //Buscar documentos más demandados
    const submitUsoBiblioteca =  e   =>{
        e.preventDefault();
      //clienteAxios.get(`/api/documentos/docMasDem/?anno=${anno}&mes=${usuario}`)
        clienteAxios.get(`/api/estadPrestamo/prestPorUsuario/?anno=${anno}&tipoUsuario=${usuario}`)
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(usoBibliotecaExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(usoBibliotecaError())
        })

        //Redireccionar
        navigate('/usobiblioteca2');
    }

  return (
    <div className="row justify-content-center mt-5">
    <h5>Obtener las estadísticas del uso de la biblioteca de acuerdo con los siguientes criterios:</h5>    
    <form   className="form-inline" onSubmit={submitUsoBiblioteca}>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Para</label>
            <select className="form-control mx-sm-3"
                onChange={e=>guardarUsuario(e.target.value)}
                value={usuario}> 
                <option value="0" selected>Todos </option>
                <option value="1">Estudiantes</option>
                <option value="2">Profesores y Personal Docente</option>
                <option value="3">Personal No Docente</option>
            </select>
        </div>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>en el año</label>
            <input 
                type="text" 
                className="form-control mx-sm-3"
                value={anno}
                onChange={e=>guardarAnno(e.target.value)} 
            />
        </div>
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-5    mb-5">Buscar</button>
    </form>
    </div>
  );
};

export default UsoBiblioteca;