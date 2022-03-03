import React from "react";

const Prestamos2 = () => {
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

    
    <form   className="form-inline">
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>ID Ejemplar</label>
            <input 
                type="text" 
                className="form-control mx-sm-3" 
            />
        </div>
        <div className="form-group  mt-5    mb-5    mx-sm-3">
            <label>Fecha a devolver</label>
            <input 
                type="date" 
                className="form-control mx-sm-3" 
            />
        </div>
            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-30   mt-5    mb-5">Prestar</button>
        
        
    </form>
    </div>

  );
};

export default Prestamos2;