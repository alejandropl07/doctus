import React from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

const UsoBiblioteca2 = () => {

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
    <h2 className="text-center my-5">Estadísticas del uso de la biblioteca por área</h2>
    <div    className="table-responsive row justify-content-center mt-5">
    <table  className="table    table-bordered">
        <thead>
        
        <tr>
            <th>Facultad</th>
            <th>Enero</th>
            <th>Febrero</th>
            <th>Marzo</th>
            <th>Abril</th>
            <th>Mayo</th>
            <th>Junio</th>
            <th>Julio</th>
            <th>Agosto</th>
            <th>Septiembre</th>
            <th>Octubre</th>
            <th>Noviembre</th>
            <th>Diciembre</th>
        </tr>
        </thead>

        <tbody>
        {
              prestPorUsuario.map(facultad=>(
            <tr>
                <th>{facultad.Facultad}</th>
            
            <th>{facultad.Cantidad}</th>
            </tr>          
              ))
          }
        </tbody>

    </table>
    </div>
 </div>

 {loading  ? "Cargando..."  : null}
    </React.Fragment>

  );
};

export default UsoBiblioteca2;