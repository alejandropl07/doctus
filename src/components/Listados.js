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

const Listados = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        
        <Link
          to={"/"}
          className="btn btn-link mt-3" 
        >
          Suspendidos
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Reclamaciones
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Préstamos diario
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Documentos en reclamación
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Ejemplares atrasados de un título
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Listado de documentos prestados
        </Link>


        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Listado de documentos en reclamación en un período
        </Link>

      </div>

  );
};

export default Listados;