import React from "react";
import { Link } from "react-router-dom";

const Prestamos = () => {
  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold ">Préstamos</h2>
                <form>
                    <div className="form-group">
                        <label>Código solicitante</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Código"
                        />
                    </div>
         <Link
          to={"/prestamos2"}
          className="btn btn-link mt-3"
        >
          Aceptar
        </Link>
                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Aceptar</button>
                </form>

            </div>
        </div>
    </div>
</div>

  );
};

export default Prestamos;