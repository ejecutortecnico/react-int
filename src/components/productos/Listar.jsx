import { useEffect, useState } from "react";
import api from "../../axios";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../Navigation";

export default function Listar() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    api.get("/api/productos")
      .then(res => setProductos(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h3>productos</h3>
      <table className="table table-striped" style={{"width":"50%","margin-left":"25%","margin-rigth":"25%"}}>
        <thead className="table-primary">
            <tr><th>nombre</th><th>descripcion</th><th>precio</th><th>opciones</th></tr>
        </thead>
        <tbody>
            {productos.map(
          u => 
          <tr> 
            <td>{u.nombre}</td>
            <td>{u.descripcion}</td>
            <td>{u.precio}</td>
            <td> 
              <Link to={`/producto/${u.idproducto}`} className="btn btn-primary">Ver</Link>
              <Link to={`/editar/${u.idproducto}`} className="btn btn-secondary">Editar</Link>
              <Link to={`/borrar/${u.idproducto}`} className="btn btn-danger">Borrar</Link>
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