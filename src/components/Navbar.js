import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar   navbar-expand-lg    navbar-dark bg-primary  justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            Bienvenido a DOCTUS
          </Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
