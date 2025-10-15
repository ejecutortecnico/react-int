export default function Input() {
  function manejarCambio(e) {
    console.log("Valor:", e.target.value);
  }

  return <input type="text" onChange={manejarCambio} />;
}