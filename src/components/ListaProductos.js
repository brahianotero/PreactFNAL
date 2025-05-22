import React, { useState, useEffect, useContext } from "react";
import productosData from "../data/productos";
import TarjetaProducto from "./TarjetaProducto";
import DetalleProducto from "./DetalleProducto";
import { CompraContext } from "../context/CompraContext";
import { useNavigate } from "react-router-dom";

const ListaProductos = () => {
  const { agregarAlCarrito } = useContext(CompraContext);
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [detalle, setDetalle] = useState(null);

  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // Cargar los productos (15 por página) sin duplicarlos
  const cargarMas = () => {
    const inicio = (pagina - 1) * 15;
    const nuevos = productosData.slice(inicio, inicio + 15);

    setProductos((prev) => {
      const idsPrevios = new Set(prev.map((p) => p.id));
      const nuevosSinDuplicados = nuevos.filter((p) => !idsPrevios.has(p.id));
      return [...prev, ...nuevosSinDuplicados];
    });

    setPagina((prev) => prev + 1);
  };

  // Carga inicial
  useEffect(() => {
    cargarMas();
  }, []);

  // Filtrar productos y mostrar logs para depuración
  useEffect(() => {
    console.log("🧪 Filtro activo");
    console.log("Marca seleccionada:", filtroMarca);
    console.log("Categoría seleccionada:", filtroCategoria);
    console.log("Productos cargados:", productos.length);

    const filtrados = productos.filter((p) => {
      if (filtroMarca && p.marca !== filtroMarca) {
        console.log(`⛔ Rechazado por marca: ${p.nombre} (${p.marca})`);
        return false;
      }
      if (
        filtroCategoria &&
        !p.categoria.toLowerCase().includes(filtroCategoria.toLowerCase())
      ) {
        console.log(`⛔ Rechazado por categoría: ${p.nombre} (${p.categoria})`);
        return false;
      }
      console.log(`✅ Aceptado: ${p.nombre}`);
      return true;
    });

    console.log("✅ Total productos filtrados:", filtrados.length);
    setProductosFiltrados(filtrados);
  }, [productos, filtroMarca, filtroCategoria]);

  return (
    <div className="p-4">
      {/* Navegación de la compra y los botones */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Cancelar compra
        </button>
        <button
          onClick={() => navigate("/carrito")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Completar compra
        </button>
      </div>

      {/*Esta parte es para filtrar las productos por marca */}
      <div className="flex gap-4 mb-4">
        <select
          value={filtroMarca}
          onChange={(e) => setFiltroMarca(e.target.value)}
          className="p-2 border"
        >
          <option value="">Filtrar por Marca</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
        </select>

        <input
          type="text"
          placeholder="Filtrar por categoría"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
          className="p-2 border"
        />
      </div>

      {/* En codigo me permite filtrar los productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              onVerDetalle={setDetalle}
            />
          ))
        ) : (
          <p>No se encontraron productos que coincidan con el filtro.</p>
        )}
      </div>

      {/* aqui esta el boton que nos permite cargar mas productos  */}
      <div className="flex justify-center mt-6">
        {productos.length < productosData.length && (
          <button
            onClick={cargarMas}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Cargar más
          </button>
        )}
      </div>

      {/* podemos visulizar el detalle del producto que estamos selecionado */}
      {detalle && (
        <DetalleProducto
          producto={detalle}
          onCerrar={() => setDetalle(null)}
          onAgregar={agregarAlCarrito}
        />
      )}
    </div>
  );
};

export default ListaProductos;
