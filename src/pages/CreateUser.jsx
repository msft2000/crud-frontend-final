import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function CreateUser() {
    const navigate = useNavigate();
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");

  const crearUsuario = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://crud-backend-t6qd.onrender.com/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nombre,
          email: correo,
          password: contraseña,
          city: ciudad,
        }),
      });
      const data = await response.json();
      if (data.user) {
        setNombre("");
        setCorreo("");
        setContraseña("");
        setCiudad("");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 offset-4">
            <h2>Crear Usuario</h2>
            <form onSubmit={crearUsuario}>
              <div>
                <label class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div>
                <label>Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div>
                <label>Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>
              <div>
                <label>Ciudad:</label>
                <input
                  type="text"
                  className="form-control"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">Crear</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { CreateUser };
