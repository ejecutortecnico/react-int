import { useEffect, useState } from "react";
import api from "../axios";
import { Link, NavLink } from "react-router-dom";
import Navigation from "./Navigation";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get("/api/usuarios")
      .then(res => setUsuarios(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <Navigation />
      <h3>Usuarios</h3>
      <table className="table table-striped table-sm" style={{"width":"50%","margin-left":"25%","margin-rigth":"25%"}}>
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
              <Link to={`/usuario/${u.idusuario}`}>Ver</Link>
              <Link to={`/usuario/${u.idusuario}`}>Editar</Link>
              <Link to={`/usuario/${u.idusuario}`}>Borrar</Link>
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