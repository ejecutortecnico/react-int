export default function Formulario() {
  function manejarSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado");
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input type="text" placeholder="Escribe algo" />
      <button type="submit">Enviar</button>
    </form>
  );
}