import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function Index() {
  const [usuarios, setUsuarios] = React.useState([]);
  const cargarUsuarios = async () => {
    try {
      const response = await fetch("https://crud-backend-t6qd.onrender.com/api/v1/user");
      const data = await response.json();
      setUsuarios(data.users);
    } catch (error) {
      console.error(error);
    }
  };
  const eliminar = async (id) => {
    try {
      const response = await fetch(`https://crud-backend-t6qd.onrender.com/api/v1/user/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.user) {
        cargarUsuarios();
      }
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    cargarUsuarios();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Ciudad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length>0 ? (
                usuarios.map((usuario) => (
                  <tr key={usuario._id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.password}</td>
                    <td>{usuario.city}</td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/edit-user/${usuario._id}`}
                      >
                        Editar
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => eliminar(usuario._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No hay usuarios</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Index };
