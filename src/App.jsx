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

function App() {
  return (
     <Routes>
      <Route path="/" element=<Home /> />
      <Route path="/about" element=<About /> />
      <Route path="/producto/:id" element=<Producto /> />
      <Route path="/usuarios" element=<Usuarios /> />
      <Route path="/usuario/:id" element=<Usuario /> />
      <Route path="*" element=<NotFound /> />
    </Routes>
  )
}

export default App
