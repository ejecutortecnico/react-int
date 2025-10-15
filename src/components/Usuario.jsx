import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";

export default function Usuario() {
  const { id } = useParams(); // id como string
  // fetch(`/api/products/${id}`) ...
  const [usuario, setUsuario] = useState(null);
    useEffect(() => {
      api.get(`/api/usuario/${id}`)
        .then(res => setUsuario(res.data))
        .catch(err => console.error("Error:", err));
    }, [id]);

  return usuario ? <div>
    Usuario: {id} <br/>
    nombre: {usuario.nombre} <br />
    apellido: {usuario.apellido} <br />
    telefono: {usuario.telefono} <br />
    email: {usuario.email} <br />
  </div>:
  <div>buscando usuario</div>
  ;
}