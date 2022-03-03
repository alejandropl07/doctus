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

const Estadisticas = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        
        <Link
          to={"/"}
          className="btn btn-link mt-3" 
        >
          Documentos más demandados
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Estadísticas del uso de la biblioteca
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Utilización de documentos
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Números de documentos
        </Link>

        <Link
          to={"/"}
          className="btn btn-link mt-3"
        >
          Cantidad total de documentos sin foliados
        </Link>

      </div>

  );
};

export default Estadisticas;