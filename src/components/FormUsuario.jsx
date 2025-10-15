import { useState } from "react";
import api from "../axios";

export default function FormUsuario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  function crearUsuario(e) {
    e.preventDefault();
    api.post("/api/usuarios", { nombre: nombre, apellido:apellido, telefono:telefono, email:email, password:password })
      .then(res => console.log("Creado:", res.data))
      .catch(err => console.error("Error:", err));
  }

  return (
    <form onSubmit={crearUsuario}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Agregar Usuario</button>
    </form>
  );
}