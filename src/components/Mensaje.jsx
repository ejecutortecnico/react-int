export default function Mensaje({ isLogged }) {
  return (
    <div>
      {isLogged ? (
        <h3>Bienvenido de nuevo 👋</h3>
      ) : (
        <h3>Por favor, inicia sesión</h3>
      )}
    </div>
  );
}