import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { crearNuevoPrestamoAction } from "../actions/prestamosAction";
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { useDispatch, useSelector } from "react-redux";

const Prestamos2 = () => {
    const   [idEjemplar,  guardarIdEjemplar]  =   useState('');
    const   [fechaADevolver,  guardarFechaADevolver]  =   useState('');

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    const   agregarPrestamo = (prestamo)    => dispatch(crearNuevoPrestamoAction(prestamo)) ;
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.error.error);

    //Hacer préstamo
    const submitAgregarPrestamo =  e   =>{
        e.preventDefault();

        validarFormulario();

        //Validar
        if(idEjemplar.trim() === ''){
            errorValidacion();
            return;
        }

        //Si pasa la validadacion
        exitoValidacion();

        //Agregar prestamo
        agregarPrestamo({
            idEjemplar,
            fechaADevolver
        });

        //Redireccionar
        navigate('/');
    }

  return (
    <div className="row justify-content-center mt-5">
        <div    className="table-responsive">
    <table className="table table-bordered">
        <thead>
        <tr>
        <th>Datos usuario</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td>Código</td>
            <td></td>
        </tr>
        <tr>
            <td>Nombre</td>
            <td></td>
        </tr>
        <tr>
            <td>Dirección</td>
            <td></td>
        </tr>
        <tr>
            <td>Teléfono</td>
            <td></td>
        </tr>
        <tr>
            <td>Área</td>
            <td></td>
        </tr>
        </tbody>

        <tfoot>
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-3    mb-3">Suspender usuario</button>
        </tfoot>
    </table>
    </div>


    <div    className="table-responsive row justify-content-center mt-5">
    <table  className="table    table-bordered">
        <thead>
        <tr>
        <th>Documentos en su poder</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <th>Código Barra</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Prestado desde</th>
            <th>A devolver</th>
        </tr>

        </tbody>

    </table>
    </div>

    
    <form   className="form-inline" onSubmit={submitAgregarPrestamo}>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>ID Ejemplar</label>
            <input 
                type="text" 
                className="form-control mx-sm-3"
                value={idEjemplar}
                onChange={e=>guardarIdEjemplar(e.target.value)} 
            />
        </div>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Fecha a devolver</label>
            <input 
                type="date" 
                className="form-control mx-sm-3"
                value={fechaADevolver}
                onChange={e=>guardarFechaADevolver(e.target.value)}
            />
        </div>
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-5    mb-5">Prestar</button>
        
        
    </form>

    {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligarios</div>  :null}
    </div>

  );
};

export default Prestamos2;