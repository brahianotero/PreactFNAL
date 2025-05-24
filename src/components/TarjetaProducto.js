
import React from "react";
const TarjetaProducto = ({ producto, onVerDetalle }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full mb-2"
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
export default TarjetaProducto;