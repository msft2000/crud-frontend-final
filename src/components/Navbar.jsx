import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <div className="container-fluid conteiner-navbar bg-dark p-3 mb-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/create-user">
              Agregar Nuevo Usuario
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export { Navbar };
