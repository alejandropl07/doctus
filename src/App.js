import React from "react";
import {Provider} from  'react-redux';
import store from './store'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import Prestamos from "./components/Prestamos";
import Devoluciones from "./components/Devoluciones";
import Sancionar from "./components/Sancionar";
import DeboLibros from "./components/DeboLibros";

function App() {
  return (
    <Router>

    <Provider store={store}>
        <Navbar />
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Principal/>} />
                <Route exact path="/prestamos" element={<Prestamos/>} />
                <Route exact path="/devoluciones" element={<Devoluciones/>} />
                <Route exact path="/debolibros" element={<DeboLibros/>} />
                <Route exact path="/sancionar" element={<Sancionar/>} />
            </Routes>
        </div>
    </Provider>
  </Router>
  );
}

export default App;
