import React from "react";
import {useState}   from "react";
import { useNavigate } from "react-router-dom";
import Swal from    "sweetalert2";

// Redux
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";
import { utilDocumentosError, utilDocumentosExito, obtenerutilDocumentosAction} from "../actions/estadisticasAction";
import { useDispatch, useSelector } from "react-redux";
import clienteAxios from "../config/axios";

const UtilizacionDeDocumentos = () => {
    const   [anno,  guardarAnno]  =   useState('');
    const   [codDomicilio,  guardarCodDomicilio]  =   useState('');
    const   [checkTodos,  guardarCheckTodos]  =   useState(false);

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.error.error);
    const utilDocs =   useSelector((state) =>  state.estadisticas.utilizDocs[0]);


    //Buscar documentos más demandados
    const submitUtilizacionDeDocumentos =  e   =>{
        e.preventDefault();
        clienteAxios.get(`/api/documentos/utilizDocs/?anno=${anno}&codDom=${codDomicilio}&checkAll=${checkTodos}`)
        .then(respuesta =>  {
            console.log(respuesta.data);
            dispatch(utilDocumentosExito(respuesta.data))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(utilDocumentosError())
        })

        Swal.fire({
            title: "Utilización de documentos",
            text: `En el año $'{anno}' se prestaron " & rsetEst("Cantidad") documentos)`,
            position: "center",
            background: "white",
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',            
          });
        console.log(checkTodos);
        console.log(codDomicilio);
        console.log(utilDocs.Cantidad);

    }

  return (
    <div className="row justify-content-center mt-5">
    <h5>Obtener las estadísticas de utilización de documentos de acuerdo con los siguientes criterios:</h5>    
    <form   className="form-inline" onSubmit={submitUtilizacionDeDocumentos}>
    <div className="form-group  mt-5    mb-5    mx-sm-3">
            <input 
                type="checkbox"
                className="form-check-input mx-sm-3"
                value={checkTodos}
                onChange={e=>guardarCheckTodos(true)} 
            />
            <label>Todos los documentos</label>
        </div>

        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Cod. Domicilio</label>
            <input 
                type="text" 
                className="form-control mx-sm-3"
                value={codDomicilio}
                onChange={e=>guardarCodDomicilio(e.target.value)} 
            />
        </div>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>del año</label>
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

export default UtilizacionDeDocumentos;