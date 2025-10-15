const frutas = ["manzana", "Banana", "Naranja"];

export default function ListaFrutas() {
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta} {index}</li>
      ))}
    </ul>
  );
}