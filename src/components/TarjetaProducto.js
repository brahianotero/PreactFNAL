
/*import React from "react";
const TarjetaProducto = ({ producto, onVerDetalle }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        /*className="w-full mb-2"*/
        /* className="producto-imagen"
      />
      <h3>{producto.nombre}</h3>
      <p>Marca: {producto.marca}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>
        <strong>${producto.precio.toLocaleString()}</strong>
      </p>
      <button
        onClick={() => onVerDetalle(producto)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Ver Detalle
      </button>
    </div>
  );
};
export default TarjetaProducto;*/

import React, { useState } from "react";
import DetalleProducto from "./DetalleProducto";

const TarjetaProducto = ({ producto, onAgregar }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="tarjeta-producto border p-4 rounded shadow bg-white flex flex-col">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="producto-imagen w-full mb-2"
      />
      <h3 className="titulo-producto">{producto.nombre}</h3>
      <p>Marca: {producto.marca}</p>
      <p>Categoría: {producto.categoria}</p>
      <p className="mb-2">
        <strong>${producto.precio.toLocaleString()}</strong>
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="btn-ver-detalle bg-blue-500 text-white px-3 py-1 rounded mb-2"
      >
        {open ? "Ocultar Detalle" : "Ver Detalle"}
      </button>

      {open && (
        <DetalleProducto
          producto={producto}
          onAgregar={onAgregar}
          onCerrar={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default TarjetaProducto;

