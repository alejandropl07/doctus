import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { masDemandadosError, masDemandadosExito, obtenerMasDemandadosAction, masDemandados } from "../actions/estadisticasAction";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../config/axios";

const Sancionar2 = () => {
    const   [motivo,  guardarMotivo]  =   useState('');
    const   [fechaInicio,  guardarFechaInicio]  =   useState('');
    const   [fechaFin,  guardarFechaFin]  =   useState('');
    const   [observaciones,  guardarObservaciones]  =   useState('');

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.error.error);


    //Buscar documentos más demandados
    const submitSancionar2 =  e   =>{
        e.preventDefault();
     /*   masDemandados();
        clienteAxios.get(`/api/documentos/docMasDem/?anno=${anno}&mes=${mes}`)
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(masDemandadosExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(masDemandadosError())
        })*/

        //Redireccionar
        navigate('/sancionar2');
    }

  return (
    <div className="row justify-content-center mt-5">
    <h3>Sancionar usuario</h3>    
    <form   className="form-inline" onSubmit={submitSancionar2}>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Motivo</label>
            <select className="form-control mx-sm-3"
                onChange={e=>guardarMotivo(e.target.value)}
                value={motivo}> 
                <option value="0" selected>Sancionado por atraso en la devolución</option>
                <option value="1">Baja definitiva</option>
                <option value="2">Licencia temporal</option>
                <option value="3">Permiso de salida</option>
                <option value="4">Perdida de documento</option>
                <option value="5">Repitencia</option>
                <option value="6">Resolución</option>
                <option value="7">Traslado</option>
                <option value="9">Vacaciones</option>
                <option value="10">Extracción de documento sin autorización</option>
            </select>
        </div>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Desde</label>
            <input 
                type="date" 
                className="form-control mx-sm-3"
                value={fechaInicio}
                onChange={e=>guardarFechaInicio(e.target.value)} 
            />
        </div>

        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Hasta</label>
            <input 
                type="date" 
                className="form-control mx-sm-3"
                value={fechaFin}
                onChange={e=>guardarFechaFin(e.target.value)} 
            />
        </div>

        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Observaciones</label>
            <input 
                type="text" 
                className="form-control mx-sm-3"
                value={observaciones}
                onChange={e=>guardarObservaciones(e.target.value)} 
            />
        </div>
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-5    mb-5">Buscar</button>
    </form>
    </div>
  );
};

export default Sancionar2;