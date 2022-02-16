import React from "react";
import { Link } from "react-router-dom";

const Principal = () => {
  return (
      <div className="container">
        
        <Link
          to={"/cambiarcontrasena"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          CAMBIAR CONTRASEÑA
        </Link>

        <Link
          to={"/busqueda"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          BÚSQUEDA
        </Link>

        <Link
          to={"/prestamos"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          PRÉSTAMOS
        </Link>

        <Link
          to={"/devoluciones"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          DEVOLUCIONES
        </Link>

        <Link
          to={"/listados"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          LISTADOS
        </Link>

        <Link
          to={"/debolibros"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          DEBO LIBROS
        </Link>


        <Link
          to={"/sancionar"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          SANCIONAR USUARIOS
        </Link>

        <Link
          to={"/estadisticas"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          ESTADÍSTICAS
        </Link>


        <Link
          to={"/cambiarusuario"}
          className="btn btn-primary   nuevo-post  d-block d-md-inline-block mt-3 btn-block"
        >
          CAMBIAR USUARIO
        </Link>

        
        
      </div>

  );
};

export default Principal;