/*import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteForm from "./components/ClienteForm";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import { CompraProvider } from "./context/CompraContext";

function App() {
  return (
    <CompraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ClienteForm />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CompraProvider>
  );
}

export default App;*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa componentes exportados como default SIN llaves
import ClienteForm from "./components/ClienteForm";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";

// Importa CompraProvider exportado como named export CON llaves
import { CompraProvider } from "./context/CompraContext";

function App() {
  return (
    <CompraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ClienteForm />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CompraProvider>
  );
}

export default App;
