import { useState, useEffect } from "react";
import api from "../axios";
import { useParams } from "react-router-dom";

export default function ActUsuario() {
  const { id } = useParams(); 
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  function testUsuario(usuario){
    setNombre(usuario.nombre)
    setApellido(usuario.apellido)
    setEmail(usuario.email)
    setTelefono(usuario.telefono)
    setPassword(usuario.password)
  }

      useEffect(() => {
        api.get(`/api/usuario/${id}`)
          .then(res => testUsuario(res.data))
          .catch(err => console.error("Error:", err));
      }, [id]);

  function editarUsuario(e) {
    e.preventDefault();
    api.put(`/api/usuarios/${id}`, { nombre: nombre, apellido:apellido, telefono:telefono, email:email, password:password })
    .then(res => console.log("Actualizado:", res.data))
    .catch(err => console.error(err));
  }

  return (
    <form onSubmit={editarUsuario}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Editar Usuario</button>
    </form>
  );
}