import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

import { obtenerSinFoliadoAction} from "../actions/estadisticasAction";

const DocumentosSinFoliado = () => {

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();
    useEffect(()  =>  {
        const   obtenerSinFoliado = ()    => dispatch(obtenerSinFoliadoAction()) ;
        obtenerSinFoliado();
      },[]);

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.estadisticas.error);
    const loading =   useSelector((state) =>  state.estadisticas.loading);
    const sinFoliado =   useSelector((state) =>  state.estadisticas.sinFoliado);

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
            <th>Total de títulos en la biblioteca sin foliados</th>
            <th>212343243</th>
            </tr>

            
        <tr>
            <th>Total de ejemplares en la biblioteca sin foliados</th>
            <th>212343243</th>
            </tr>
        </thead>

        <tbody>
       
            <tr>
            <th>Cantidad de título sin foliado</th>
            <th></th>   
            <th>Cantidad de ejemplares sin foliado</th>        
            </tr>        
        <tr>
            <th>Código L:         123123</th>
            <th></th> 
            <th>Código L:         22323213</th>
        </tr>
        <tr>
            <th>Código F:         123123</th>
            <th></th> 
            <th>Código F:         22323213</th>
        </tr>
        <tr>
            <th>Código S:         123123</th>
            <th></th> 
            <th>Código S:         22323213</th>
        </tr>
        <tr>
            <th>Código E:         123123</th>
            <th></th> 
            <th>Código E:         22323213</th>
        </tr>
        </tbody>

    </table>
    </div>
 </div>

 {loading  ? "Cargando..."  : null}
    </React.Fragment>

  );
};

export default DocumentosSinFoliado;