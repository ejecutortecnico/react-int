const tareas = ["Estudiar", "Leer", "Practicar React"];

export default function ListaTareas() {
  return (
    <div>
      {tareas.length === 0 ? (
        <p>No hay tareas pendientes.</p>
      ) : (
        <ul>
          {tareas.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}