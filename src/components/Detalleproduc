import React from "react";
const DetalleProducto = ({ producto, onCerrar, onAgregar }) => {
  if (!producto) return null;
  return (
    <div className="p-4 border rounded shadow bg-white mt-4">
      <h2 className="text-xl font-semibold mb-2">Detalle del Producto</h2>
      <p>
        <strong>Nombre:</strong> {producto.nombre}
      </p>
      <p>
        <strong>Marca:</strong> {producto.marca}
      </p>
      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>
      <p>{producto.descripcion}</p>
      <p className="text-lg font-bold">${producto.precio.toLocaleString()}</p>
      <button
        onClick={() => {
          onAgregar(producto);
          onCerrar();
        }}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
      >
        Agregar al carrito
      </button>
      <button
        onClick={onCerrar}
        className="ml-2 mt-3 bg-gray-400 text-white px-4 py-2 rounded"
      >
        Cerrar
      </button>
    </div>
  );
};
export default DetalleProducto;