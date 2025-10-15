import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <NavLink to="/about"
               className={({isActive}) => isActive ? "active" : ""}>
        Acerca
      </NavLink>
    </nav>
  );
}