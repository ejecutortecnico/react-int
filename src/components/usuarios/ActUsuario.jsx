import { useState, useEffect } from "react";
import api from "../../axios";
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
    <>
        <form onSubmit={editarUsuario} style={{"width":"60%","marginLeft":"20%","marginRigth":"20%"}}>
        <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Apellido</label>
        <input value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">telefono</label>
        <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" />
        </div>
      <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Editar</button>
  </form>
    </>
  );
}