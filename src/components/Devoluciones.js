import React from "react";

const Devoluciones = () => {
  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold ">Devoluciones</h2>
                <form>
                <div className="form-group">
                        <label>Código documento</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Documento"
                        />
                    </div>
                    <div className="form-group">
                        <label>Código solicitante</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Solicitante"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Aceptar</button>
                </form>

            </div>
        </div>
    </div>
</div>

  );
};

export default Devoluciones;