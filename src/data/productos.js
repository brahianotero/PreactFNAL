
//imagenssss
import DELLImage from "../images/DELL.png";
import HPImage from "../images/HP.png";
import LENOVOImage from "../images/LENOVO.png";

const productos = Array.from({ length: 50 }, (_, i) => {
  const marca = ["HP", "Dell", "Lenovo"][i % 3];
  const categoria = ["Laptop", "Monitor", "Teclado"][i % 3];

  const imagen =
    marca === "Dell" ? DELLImage : marca === "HP" ? HPImage : LENOVOImage;

  return {
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    marca,
    categoria,
    precio: 500000 + i * 50000,
    descripcion: `Este es el producto número ${i + 1}`,
    imagen,
  };
});

export default productos;
