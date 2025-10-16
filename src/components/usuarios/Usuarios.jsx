import { useEffect, useState } from "react";
import api from "../../axios";
import { Link, NavLink } from "react-router-dom";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get("/api/usuarios")
      .then(res => setUsuarios(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h3>Usuarios</h3>
      <table className="table table-striped" style={{"width":"60%","marginLeft":"20%","marginRigth":"20%"}}>
        <thead className="table-primary">
            <tr><th>nombre</th><th>apellido</th><th>email</th><th>opciones</th></tr>
        </thead>
        <tbody>
            {usuarios.map(
          u => 
          <tr> 
            <td>{u.nombre}</td>
            <td>{u.apellido}</td>
            <td>{u.email}</td>
            <td> 
              <Link to={`/usuario/${u.idusuario}`} className="btn btn-primary">Ver</Link>
              <Link to={`/editar/${u.idusuario}`} className="btn btn-secondary">Editar</Link>
              <Link to={`/borrar/${u.idusuario}`} className="btn btn-danger">Borrar</Link>
            </td>
          </tr>
        )}
        </tbody>
        <tfoot>
          <tr className="table-secundary"><td>tabla bootstrap</td></tr>
        </tfoot>
      </table>
    </div>
  );
}