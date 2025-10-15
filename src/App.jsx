import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Producto from './components/Producto';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import FormUsuario from './components/FormUsuario';
import ActUsuario from './components/ActUsuario';

function App() {
  return (
     <Routes>
      <Route path="/" element=<Home /> />
      <Route path="/about" element=<About /> />
      <Route path="/producto/:id" element=<Producto /> />
      <Route path="/usuarios" element=<Usuarios /> />
      <Route path="/usuario/:id" element=<Usuario /> />
      <Route path="/editar/:id" element=<ActUsuario /> />
      <Route path="/crearusuario" element=<FormUsuario /> />
      <Route path="*" element=<NotFound /> />
    </Routes>
  )
}

export default App
