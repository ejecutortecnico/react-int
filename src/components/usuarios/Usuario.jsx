import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../axios";

export default function Usuario() {
  const { id } = useParams(); // id como string
  // fetch(`/api/products/${id}`) ...
  const [usuario, setUsuario] = useState(null);
    useEffect(() => {
      api.get(`/api/usuario/${id}`)
        .then(res => setUsuario(res.data))
        .catch(err => console.error("Error:", err));
    }, [id]);

  return usuario ? 
  <div className="card" style={{"width":"60%","marginLeft":"20%","marginRigth":"20%"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{usuario.nombre} {usuario.apellido}</h5>
    <p className="card-text">{usuario.email}</p>
    <p className="card-text">{usuario.telefono}</p>
    <NavLink to={`/editar/${usuario.idusuario}`} className="btn btn-primary">Editar</NavLink>
  </div>
</div>:<div>buscando usuario</div>;
}