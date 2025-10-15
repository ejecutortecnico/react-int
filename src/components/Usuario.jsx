// Uso en el componente
import { useParams } from "react-router-dom";

export default function Usuario() {
  const { id } = useParams(); // id como string
  // fetch(`/api/products/${id}`) ...
  return <div>Producto: {id}</div>;
}