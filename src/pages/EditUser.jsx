/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function EditUser() {
  const navigate = useNavigate();
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");
  const { id } = useParams();
  const editUser = async (e) => {
    e.preventDefault();
    const userToSend = {};
    if (nombre) {
      userToSend.name = nombre;
    }
    if (correo) {
      userToSend.email = correo;
    }
    if (contraseña) {
      userToSend.password = contraseña;
    }
    if (ciudad) {
      userToSend.city = ciudad;
    }
    try {
      const response = await fetch(`https://crud-backend-t6qd.onrender.com/api/v1/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userToSend),
      });
      const data = await response.json();
      if (data) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/user/${id}`);
      const data = await response.json();
      setNombre(data.user.name);
      setCorreo(data.user.email);
      setContraseña(data.user.password);
      setCiudad(data.user.city);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getUser();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 offset-4">
            <h2>Crear Usuario</h2>
            <form onSubmit={editUser}>
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
              <button type="submit" className="btn btn-primary mt-3">
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { EditUser };
