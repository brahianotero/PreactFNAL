import React, { useContext, useState } from "react";
import { CompraContext } from "../context/CompraContext";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { carrito, datosCliente, presupuesto, limpiarCompra } =
    useContext(CompraContext);
  const navigate = useNavigate();

  const [tarjeta, setTarjeta] = useState({
    numero: "",
    expiracion: "",
    cvv: "",
    titular: "",
  });
  const [confirmado, setConfirmado] = useState(false);
  const [error, setError] = useState("");

  const total = carrito.reduce((sum, p) => sum + p.precio, 0);
  const domicilio = datosCliente?.entrega === "domicilio" ? 10000 : 0;
  const totalFinal = total + domicilio;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTarjeta((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmar = () => {
    const camposVacios = Object.values(tarjeta).some((v) => v.trim() === "");
    if (camposVacios) {
      setError("Todos los campos de la tarjeta son obligatorios.");
      return;
    }
    if (totalFinal > presupuesto) {
      setError("El total supera tu presupuesto.");
      return;
    }
    setConfirmado(true);
    setError("");
  };

  const handleLimpiar = () => {
    limpiarCompra();
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Resumen del carrito</h2>

      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length > 0 ? (
            carrito.slice(0, 20).map((p, i) => (
              <tr key={i}>
                <td className="border p-2">{p.nombre}</td>
                <td className="border p-2">${p.precio.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border p-2 text-center" colSpan="2">
                Carrito vacío
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mb-4">
        <p>Total productos: {carrito.length}</p>
        <p>Total compra: ${total.toLocaleString()}</p>
        {domicilio > 0 && (
          <p>Cargo por domicilio: ${domicilio.toLocaleString()}</p>
        )}
        <p className="font-bold">Total final: ${totalFinal.toLocaleString()}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2">Información de tarjeta</h3>
        <input
           name="numero"
           type="text"
           placeholder="Número"
           value={tarjeta.numero}
           onChange={handleInputChange}
          className="input-pequeño"
/>
      <input
         name="expiracion"
         type="text"
         placeholder="Expiración"
         value={tarjeta.expiracion}
         onChange={handleInputChange}
         className="input-pequeño"
/>
        <input
          name="cvv"
          type="password"
          placeholder="CVV"
          value={tarjeta.cvv}
          onChange={handleInputChange}
          className="input-pequeño"
  />
         <input
           name="titular"
           type="text"
           placeholder="Titular"
           value={tarjeta.titular}
           onChange={handleInputChange}
           className="input-pequeño"
  />
</div>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <div className="flex gap-4">
        <button
          onClick={handleConfirmar}
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={confirmado}
        >
          Confirmar compra
        </button>
        <button
          onClick={handleLimpiar}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Limpiar campos
        </button>
      </div>

      {confirmado && (
        <p className="text-green-700 mt-4 font-bold">
          ¡Compra confirmada exitosamente!
        </p>
      )}
      
    </div>
  );
};

export default Carrito;
