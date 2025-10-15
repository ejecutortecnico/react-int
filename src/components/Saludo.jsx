import { useState, useEffect } from "react";

function Saludo({ id }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/usuario/${id}`)
      .then(res => res.json())
      .then(data => setUsuario(data));
  }, [id]);

  return usuario ? <p>{usuario.nombre}</p> : <p>Cargando...</p>;
}

export default Saludo