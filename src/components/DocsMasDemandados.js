import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { masDemandadosError, masDemandadosExito, obtenerMasDemandadosAction, masDemandados } from "../actions/estadisticasAction";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../config/axios";

const DocsMasDemandados = () => {
    const   [anno,  guardarAnno]  =   useState('');
    const   [mes,  guardarMes]  =   useState('');

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.error.error);


    //Buscar documentos más demandados
    const submitDocsMasDemandados =  e   =>{
        e.preventDefault();
        masDemandados();
        clienteAxios.get(`/api/documentos/docMasDem/?anno=${anno}&mes=${mes}`)
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(masDemandadosExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(masDemandadosError())
        })

        //Redireccionar
        navigate('/docsmasdemandados2');
    }

  return (
    <div className="row justify-content-center mt-5">
    <h3>Documentos más demandados</h3>    
    <form   className="form-inline" onSubmit={submitDocsMasDemandados}>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Mes</label>
            <select className="form-control mx-sm-3"
                onChange={e=>guardarMes(e.target.value)}
                value={mes}> 
                <option value="0" selected> </option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
            </select>
            <label>(dejar en blanco para seleccionar un año completo)</label>
        </div>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>del año</label>
            <input 
                type="text" 
                className="form-control mx-sm-3"
                value={anno}
                onChange={e=>guardarAnno(e.target.value)} 
            />
            <label>(dejar en blanco para seleccionar todos los años)</label>
        </div>
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-5    mb-5">Buscar</button>
    </form>
    </div>
  );
};

export default DocsMasDemandados;