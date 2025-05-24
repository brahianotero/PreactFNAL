
import React, { createContext, useState } from "react";
export const CompraContext = createContext();
export const CompraProvider = ({ children }) => {
  const [datosCliente, setDatosCliente] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };
  const limpiarCompra = () => {
    setDatosCliente(null);
    setCarrito([]);
    setPresupuesto(0);
  };
  return (
    <CompraContext.Provider
      value={{
        datosCliente,
        setDatosCliente,
        carrito,
        agregarAlCarrito,
        limpiarCompra,
        presupuesto,
        setPresupuesto,
      }}
    >
      {children}
    </CompraContext.Provider>
  );
};