import React from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

const DocsMasDemandados2 = () => {

    const navigate  = useNavigate();

    const   dispatch    =   useDispatch();

    // Obtener los datos del state
    const error =   useSelector((state) =>  state.estadisticas.error);
    const loading =   useSelector((state) =>  state.estadisticas.loading);
    const docsMasDemand =   useSelector((state) =>  state.estadisticas.docsMasDemand);

  return (
    <React.Fragment>
    {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Error al cargar los documentos</div>
    : null
    }
    <div className="row justify-content-center mt-5">
    <h2 className="text-center my-5">Documentos más demandados</h2>
    <div    className="table-responsive row justify-content-center mt-5">
    <table  className="table    table-bordered">
        <thead>
        
        <tr>
            <th>Títulos</th>
            <th>Cantidad</th>
        </tr>
        </thead>

        <tbody>
        {
              docsMasDemand.map(doc=>(
                //clienteAxios.get(`/api/libros/${doc.IDLibro}`)
            <tr>
                <th>{doc.IDLibro}</th>
                <th>{doc.Prestamos}</th>
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

export default DocsMasDemandados2;