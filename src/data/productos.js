
import dellImage from "../images/DELL.png";
// src/data/productos.js
const productos = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1, // IDs únicos del 1 al 50
  nombre: `Producto ${i + 1}`,
  marca: ["HP", "Dell", "Lenovo"][i % 3], // Cicla entre las 3 marcas
  categoria: ["Laptop", "Monitor", "Teclado"][i % 3], // Cicla entre las 3 categorías
  precio: 500000 + i * 50000,
  descripcion: `Este es el producto número ${i + 1}`,
  imagen: `https://via.placeholder.com/150?text=Producto+${i + 1}`,
}));
export default productos;