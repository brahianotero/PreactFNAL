import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CompraContext } from "../context/CompraContext";

const ClienteForm = () => {
  const { setDatosCliente, setPresupuesto } = useContext(CompraContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    presupuesto: "",
    direccion: "",
    entrega: "domicilio",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre || form.nombre.length > 20) {
      nuevosErrores.nombre = "Nombre requerido (máx. 20 caracteres)";
    }
    if (!form.presupuesto || isNaN(form.presupuesto)) {
      nuevosErrores.presupuesto = "Presupuesto numérico requerido";
    }
    if (!form.direccion) {
      nuevosErrores.direccion = "Dirección requerida";
    }
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = validar();
    if (Object.keys(val).length === 0) {
      setErrores({});
      setDatosCliente(form);
      setPresupuesto(Number(form.presupuesto));
      navigate("/productos");
    } else {
      setErrores(val);
    }
  };

  const limpiarCampos = () => {
    setForm({
      nombre: "",
      presupuesto: "",
      direccion: "",
      entrega: "domicilio",
    });
    setErrores({});
  };

  return (
    <div className="container">
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del comprador:</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <label>Presupuesto máximo:</label>
        <input
          type="number"
          name="presupuesto"
          value={form.presupuesto}
          onChange={handleChange}
        />
        {errores.presupuesto && <p className="error">{errores.presupuesto}</p>}

        <label>Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
        />
        {errores.direccion && <p className="error">{errores.direccion}</p>}

        <label>Tipo de entrega:</label>
        <div>
          <label>
            <input
              type="radio"
              name="entrega"
              value="domicilio"
              checked={form.entrega === "domicilio"}
              onChange={handleChange}
            />
            Domicilio
          </label>
          <label style={{ marginLeft: "15px" }}>
            <input
              type="radio"
              name="entrega"
              value="tienda"
              checked={form.entrega === "tienda"}
              onChange={handleChange}
            />
            Recoger en tienda
          </label>
        </div>

        <div style={{ marginTop: "15px" }}>
          <button type="submit" style={{ marginRight: "10px" }}>
            Iniciar compra
          </button>
          <button type="button" onClick={limpiarCampos}>
            Limpiar campos
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClienteForm;
