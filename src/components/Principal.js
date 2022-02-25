import React from "react";
import {makeStyles} from '@mui/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },

  }));

const Principal = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        
        <Link
          to={"/cambiarcontrasena"}
          className="btn btn-link mt-3" 
        >
          CAMBIAR CONTRASEÑA
        </Link>

        <Link
          to={"/busqueda"}
          className="btn btn-link mt-3"
        >
          BÚSQUEDA
        </Link>

        <Link
          to={"/prestamos"}
          className="btn btn-link mt-3"
        >
          PRÉSTAMOS
        </Link>

        <Link
          to={"/devoluciones"}
          className="btn btn-link mt-3"
        >
          DEVOLUCIONES
        </Link>

        <Link
          to={"/listados"}
          className="btn btn-link mt-3"
        >
          LISTADOS
        </Link>

        <Link
          to={"/debolibros"}
          className="btn btn-link mt-3"
        >
          DEBO LIBROS
        </Link>


        <Link
          to={"/sancionar"}
          className="btn btn-link mt-3"
        >
          SANCIONAR USUARIOS
        </Link>

        <Link
          to={"/estadisticas"}
          className="btn btn-link mt-3"
        >
          ESTADÍSTICAS
        </Link>


        <Link
          to={"/cambiarusuario"}
          className="btn btn-link mt-3"
        >
          CAMBIAR USUARIO
        </Link>

        
        
      </div>

  );
};

export default Principal;