import React from "react";
import {Provider} from  'react-redux';
import store from './store'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import Prestamos from "./components/Prestamos";
import Prestamos2 from "./components/Prestamos2";
import Devoluciones from "./components/Devoluciones";
import Sancionar from "./components/Sancionar";
import Sancionar2 from "./components/Sancionar2";
import DeboLibros from "./components/DeboLibros";
import Listados from "./components/Listados";
import Estadisticas from "./components/Estadisticas";
import Login from "./components/Login";
import CambiarContr from "./components/CambiarContr";
import DocsMasDemandados from "./components/DocsMasDemandados";
import DocsMasDemandados2 from "./components/DocsMasDemandados2";
import UsoBiblioteca from "./components/UsoBiblioteca";
import UsoBiblioteca2 from "./components/UsoBiblioteca2";
import UtilizacionDeDocumentos from "./components/UtilizacionDeDocumentos";
import NumeroDeDocumentos from "./components/NumeroDeDocumentos";
import DocumentosSinFoliado from "./components/DocumentosSinFoliado";

function App() {
  return (
    <Router>

    <Provider store={store}>
        <Navbar />
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Login/>} /> 
                <Route exact path="/cambiarcontrasena" element={<CambiarContr/>} />  
                <Route exact path="/principal" element={<Principal/>} />
                <Route exact path="/prestamos" element={<Prestamos/>} />
                <Route exact path="/prestamos2" element={<Prestamos2/>} />
                <Route exact path="/devoluciones" element={<Devoluciones/>} />
                <Route exact path="/debolibros" element={<DeboLibros/>} />
                <Route exact path="/sancionar" element={<Sancionar/>} />
                <Route exact path="/sancionar2" element={<Sancionar2/>} />
                <Route exact path="/listados" element={<Listados/>} />
                <Route exact path="/estadisticas" element={<Estadisticas/>} />
                <Route exact path="/docsmasdemandados" element={<DocsMasDemandados/>} />
                <Route exact path="/docsmasdemandados2" element={<DocsMasDemandados2/>} />
                <Route exact path="/usobiblioteca" element={<UsoBiblioteca/>} />
                <Route exact path="/usobiblioteca2" element={<UsoBiblioteca2/>} />
                <Route exact path="/utildocumentos" element={<UtilizacionDeDocumentos/>} />
                <Route exact path="/numdocumentos" element={<NumeroDeDocumentos/>} />
                <Route exact path="/sinfoliado" element={<DocumentosSinFoliado/>} />
            </Routes>
        </div>
    </Provider>
  </Router>
  );
}

export default App;
