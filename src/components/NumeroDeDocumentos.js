import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { obtenerNumeroDocumentosAction} from "../actions/estadisticasAction";

const NumeroDeDocumentos = () => {

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    useEffect(()  =>  {
        const   obtenerNumDocumentos = ()    => dispatch(obtenerNumeroDocumentosAction()) ;
        obtenerNumDocumentos();
      },[]);

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.estadisticas.error);
    const loading =   useSelector((state) =>  state.estadisticas.loading);
    const numDocs =   useSelector((state) =>  state.estadisticas.numDocs);

  return (
    <React.Fragment>
    {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Error al cargar los documentos</div>
    : null
    }
    <div className="row justify-content-center mt-5">
    <div    className="table-responsive row justify-content-center mt-5">
    <table  className="table    table-bordered">
        <thead>
        <tr>
            <th>Total de ejemplares</th>
            <th>212343243</th>
            <th>Total de títulos</th>
            <th>212343243</th>
            </tr>
        </thead>

        <tbody>
       
            <tr>
            <th>Ejemplares por sala</th>
            <th></th>   
            <th>Títulos por sala</th>        
            </tr>        
        <tr>
            <th>Sala A:         123123</th>
            <th></th> 
            <th>Sala A:         22323213</th>
        </tr>
        <tr>
            <th>Sala B:         123123</th>
            <th></th> 
            <th>Sala B:         22323213</th>
        </tr>
        <tr>
            <th>Sala D:         123123</th>
            <th></th> 
            <th>Sala D:         22323213</th>
        </tr>
        <tr>
            <th>Sala E:         123123</th>
            <th></th> 
            <th>Sala E:         22323213</th>
        </tr>
        <tr>
            <th>Sala F:         123123</th>
            <th></th> 
            <th>Sala F:         22323213</th>
        </tr>
        <tr>
            <th>Sala G:         123123</th>
            <th></th> 
            <th>Sala G:         22323213</th>
        </tr>
        <tr>
            <th>Almacén:         123123</th>
            <th></th> 
            <th>Almacén:         22323213</th>
        </tr>
        <tr>
            <th>Referencia:         123123</th>
            <th></th> 
            <th>Referencia:         22323213</th>
        </tr>
        <tr>
            <th>Restauración:         123123</th>
            <th></th> 
            <th>Restauración:         22323213</th>
        </tr>
              
        </tbody>

    </table>
    </div>
 </div>

 {loading  ? "Cargando..."  : null}
    </React.Fragment>

  );
};

export default NumeroDeDocumentos;