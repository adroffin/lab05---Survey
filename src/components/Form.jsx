import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

// Se declara el Form como el componente que se va a exportar
export default function Form() {
  // Se declara un estado para los datos de formulario y algo para modificarlo, inicializando los valores como un string vacio
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    edad: "",
    satisfaccion: "",
  });

  // Se declara un estado para mostrar la alerta luego de dar click en el boton "Enviar", se inicia en false ya que el modal se muestra cuando el valor del estado es true
  const [mostrarModal, setMostrarModal] = useState(false);

  const camposTotales = 5;

  // Funcion utilizada para el avance de la ProgressBar, mandando a camposLlenos los valores del formdata que sean distintos del vacio, osea campos con informacion
  const calcularProgreso = () => {
    const camposLlenos = Object.values(formData).filter(
      (valor) => valor.trim() !== ""
    ).length;
    return (camposLlenos / camposTotales) * 100;
  };

  // Va actualizando el formulario en tiempo real, verificando que no sea posible introducir una edad menor a 1
  const cambio = (e) => {
    const { name, value } = e.target;

    if (name === "edad" && value !== "" && parseInt(value) < 1) {
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Modal de Bootstrap que se muestra despues de clickear el boton enviar, este despues de 5 segundos desaparece dejando su estado en false y recargando la pagina
  const mensaje = (e) => {
    e.preventDefault();
    setMostrarModal(true);

    setTimeout(() => {
      setMostrarModal(false);
      window.location.reload();
    }, 5000);
  };

  // Formulario que ve el usuario
  return (
    <>
      <form onSubmit={mensaje}>
        <ProgressBar progress={calcularProgreso()} />
        <hr />
        {/* Nombre y apellido */}
        <fieldset>
          <label htmlFor="usuario">Nombre y Apellido* </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            className="form-control"
            value={formData.usuario}
            onChange={cambio}
            required
          />
        </fieldset>
        <hr />

        {/* Correo */}
        <fieldset>
          <label htmlFor="email">Correo* </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={cambio}
            required
          />
        </fieldset>
        <hr />

        {/* Edad */}
        <fieldset>
          <label htmlFor="edad">Edad* </label>
          <input
            type="number"
            id="edad"
            name="edad"
            className="form-control"
            value={formData.edad}
            onChange={cambio}
            required
          />
        </fieldset>
        <hr />

        {/* Nivel de Satisfacción */}
        <fieldset>
          <p> Nivel de satisfacción: </p>
          <div className="form-check">
            <input
              type="radio"
              id="lvl1"
              name="satisfaccion"
              value="muy_satisfecho"
              onChange={cambio}
              className="form-check-input"
              required
            />
            <label htmlFor="lvl1" className="form-check-label">
              Muy satisfecho
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="lvl2"
              name="satisfaccion"
              value="satisfecho"
              onChange={cambio}
              className="form-check-input"
              required
            />
            <label htmlFor="lvl2" className="form-check-label">
              Satisfecho
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="lvl3"
              name="satisfaccion"
              value="neutral"
              onChange={cambio}
              className="form-check-input"
              required
            />
            <label htmlFor="lvl3" className="form-check-label">
              Neutral
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="lvl4"
              name="satisfaccion"
              value="insatisfecho"
              onChange={cambio}
              className="form-check-input"
              required
            />
            <label htmlFor="lvl4" className="form-check-label">
              Insatisfecho
            </label>
          </div>
        </fieldset>
        <hr />

        {/* Campo select de contacto */}
        <fieldset>
          <p>¿Cómo prefieres ser contactado?</p>
          <select
            name="contacto"
            className="form-control"
            value={formData.contacto}
            onChange={cambio}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="email">Correo Electrónico</option>
            <option value="telefono">Teléfono</option>
            <option value="redes">Redes Sociales</option>
          </select>
        </fieldset>
        <hr />
        {/* Botón de Enviar */}
        <button type="submit" className="btn btn-warning">
          Enviar
        </button>
      </form>

      {/* Modal de Bootstrap */}
      {mostrarModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">¡Éxito!</h5>
              </div>
              <div className="modal-body">
                <p>✅ Su información se ha enviado exitosamente.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
