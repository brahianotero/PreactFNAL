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
        style={{ backgroundColor: '#57bcff', color: 'white', marginRight: '10px' }}/* color a los botones */
      >
        Agregar al carrito
      </button>
      <button
        onClick={onCerrar}
       
        style={{ backgroundColor: '#57bcff', color: 'white',marginRight: '10px' }}/* color a los botones */
      >
        Cerrar
      </button>
    </div>
  );
};
export default DetalleProducto;