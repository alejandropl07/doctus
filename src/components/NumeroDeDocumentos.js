import React from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

const NumeroDeDocumentos2 = () => {

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.estadisticas.error);
    const loading =   useSelector((state) =>  state.estadisticas.loading);
    const prestPorUsuario =   useSelector((state) =>  state.estadPrestamo.prestPorUsuario);

  return (
    <React.Fragment>
    {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Error al cargar los prestamosumentos</div>
    : null
    }
    <div className="row justify-content-center mt-5">
    <h2 className="text-center my-5">Utilización de Documentos</h2>
    <div    className="table-responsive row justify-content-center mt-5">
    <table  className="table    table-bordered">
        <thead>
        
        <tr>
            <th>Total de ejemplares</th>
            <th>21432432</th>
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

export default NumeroDeDocumentos2;