import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { crearNuevaSancionAction } from "../actions/prestamosAction";
import { useDispatch, useSelector } from "react-redux";

const Sancionar2 = () => {
    const   [motivo,  guardarMotivo]  =   useState('Sancionado por atraso en la devolución');
    const   [fechaInicio,  guardarFechaInicio]  =   useState('');
    const   [fechaFin,  guardarFechaFin]  =   useState('');
    const   [observaciones,  guardarObservaciones]  =   useState('');

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;
    const   agregarSancion  =   (sancion)  =>  dispatch(crearNuevaSancionAction(sancion));

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.error.error);
    const ci =   useSelector((state) =>  state.prestamos.sancion.ci);


    //Sancionar usuario
    const submitSancionar2 =  e   =>{
        e.preventDefault();
        validarFormulario();
        if(motivo.trim() === '' ||  fechaInicio.trim()  === ''  ||  fechaFin.trim()  === ''){
            errorValidacion();
            return;
        }
            exitoValidacion();
        agregarSancion({
            ci,
            motivo,
            fechaInicio,
            fechaFin,
            observaciones,
        });


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
                value={motivo} > 
                <option value="Sancionado por atraso en la devolución" selected>Sancionado por atraso en la devolución</option>
                <option value="Baja definitiva">Baja definitiva</option>
                <option value="Licencia temporal">Licencia temporal</option>
                <option value="Permiso de salida">Permiso de salida</option>
                <option value="Perdida de documento">Perdida de documento</option>
                <option value="Repitencia">Repitencia</option>
                <option value="Resolución">Resolución</option>
                <option value="Traslado">Traslado</option>
                <option value="Vacaciones">Vacaciones</option>
                <option value="Extracción de documento sin autorización">Extracción de documento sin autorización</option>
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
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-5    mb-5">Sancionar</button>
    </form>
    {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Debe insertar todos los datos</div>  :null}
    </div>
  );
};

export default Sancionar2;